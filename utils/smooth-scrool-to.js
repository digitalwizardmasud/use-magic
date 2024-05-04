export const scrollToSection = (sectionName) =>{
  let section = document.getElementById(sectionName);
  section?.scrollIntoView({ behavior: 'smooth',   });
}


export const scrollToTop = () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}