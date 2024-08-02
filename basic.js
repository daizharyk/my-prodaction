let allArticles = document.getElementById("allarticles");
let contacts = document.getElementById("contacts");

const articlesCount = 5;

allArticles.querySelector("a").textContent = `Все статьи  (${articlesCount})`


export let articleSection = document.querySelector(".article_section")


let scrollIntoElement = (el) => {
  el.scrollIntoView ({behavior: "smooth"})
};
allArticles.addEventListener("click" , (e)=>{
  e.preventDefault();
  scrollIntoElement(articleSection)
});

let contactsSection = document.querySelector(".contacts")
contacts.addEventListener("click" , (e)=>{
  e.preventDefault();
  scrollIntoElement(contactsSection)
});




