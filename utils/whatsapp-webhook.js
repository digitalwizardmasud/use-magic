// Note: 
// This webhook will check every message and Send a default image. 
// We can perform any action instead of sending image

const dotenv = require("dotenv");
const express = require("express");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");
dotenv.config();

const app = express();
app.use(express.json());

const { WEBHOOK_VERIFY_TOKEN, GRAPH_API_TOKEN } = process.env;
const PORT = 8000;
app.post("/webhook", async (req, res) => {
  console.log("Incoming webhook message:", req.body);

  // details on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  const message = req.body.entry?.[0]?.changes[0]?.value?.messages?.[0];

  if (message?.type === "text") {
    const business_phone_number_id =
      req.body.entry?.[0].changes?.[0].value?.metadata?.phone_number_id;

    // send a reply message as per the docs here https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages
    const formData = new FormData();
    formData.append("messaging_product", "whatsapp");
    // img.png => check it on current folder
    formData.append("file", fs.createReadStream(path.join("img.png")));
    const uploaded = await axios({
      method: "POST",
      url: `https://graph.facebook.com/v19.0/${business_phone_number_id}/media`,
      headers: {
        Authorization: `Bearer ${GRAPH_API_TOKEN}`,
        ...formData.getHeaders(),
      },
      data: formData,
    });

    axios({
      method: "POST",
      maxBodyLength: Infinity,
      url: `https://graph.facebook.com/v19.0/${business_phone_number_id}/messages`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GRAPH_API_TOKEN}`,
      },
      data: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: "8801879866005",
        type: "image",
        image: {
          id: uploaded.data.id,
        },
      }),
    })
    .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    // mark incoming message as read
    // await axios({
    //   method: "POST",
    //   url: `https://graph.facebook.com/v18.0/${business_phone_number_id}/messages`,
    //   headers: {
    //     Authorization: `Bearer ${GRAPH_API_TOKEN}`,
    //   },
    //   data: {
    //     messaging_product: "whatsapp",
    //     status: "read",
    //     message_id: message.id,
    //   },
    // });
  }

  res.sendStatus(200);
});

// accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];
  if (mode === "subscribe" && token === WEBHOOK_VERIFY_TOKEN) {
    res.status(200).send(challenge);
    console.log("Webhook verified successfully!");
  } else {
    res.sendStatus(403);
  }
});

app.get("/", (req, res) => {
  res.send(`<pre>Whatsapp Webhook API - /webhook </pre>`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
