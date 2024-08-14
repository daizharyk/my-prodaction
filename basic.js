import articlesData from "./article.json" with { type: "json" };
import { getAllArticles } from "./articlesService.js";


let allArticles = document.getElementById("allarticles");
let contacts = document.getElementById("contacts");


allArticles.querySelector("a").textContent = `Все статьи  (${getAllArticles()})`


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


let articleElements = articlesData.articles.map((article) =>{
  let { name , text , id} = article;
  let articleCard = document.createElement("article");
  articleCard.className = "section_element";
  let title = document.createElement("h2");
  title.textContent = name;
  articleCard.append(title)
  let paragraph = document.createElement("p");
  paragraph.textContent = text.substring(0, 100) + '....';
  articleCard.append(paragraph);
  let linkbt = document.createElement("a");
  linkbt.setAttribute("href", `article.html?articleId=${id}`);
  linkbt.textContent = "Читать далее";
  articleCard.append(linkbt);
  return articleCard;
  });
  

  articleSection.append(...articleElements);
