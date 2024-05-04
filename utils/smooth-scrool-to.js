export const scrollToSection = (sectionName, setSection) =>{
  let section = document.getElementById(sectionName);
  section?.scrollIntoView({ behavior: 'smooth',   });
  localStorage.setItem("section", sectionName)
  setSection(sectionName)
}


export const scrollToTop = (setSection) =>{
  localStorage.setItem("section", "hero-section")
  setSection("hero-section")
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}