
const smoothScrollToSection = (sectionId) =>{
    let section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth',   });
  }
export default smoothScrollToSection

