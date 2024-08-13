import articlesData from "./article.json" with { type: "json" };
import { getAllArticles } from "./articlesService.js";


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


let articleElements = articlesData.articles.map((article) =>{
  let { name , text , id} = article;
  let articleCard = document.createElement("article");
  articleCard.className = "section_element";
  let title = document.createElement("h2");
  title.textContent = name;
  articleCard.append(title)
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  articleCard.append(paragraph);
  let linkbt = document.createElement("a");
  linkbt.setAttribute("href", `article.html?articleId=${id}`);
  linkbt.textContent = "Читать далее";
  articleCard.append(linkbt);
  return articleCard;
  });
  

  const article = getAllArticles();

console.log(article);


  articleSection.append(...articleElements);



// const currentArticle = articlesData.articles.find((article) =>{
//   return article.id === Number(articleId)
// });

// if(currentArticle) {
//     const { name, text , id } = currentArticle;
//     let articleCard = document.createElement("article");
//     articleCard.className = "section_element";
//     let title = document.createElement("h2");
//     title.innerText = name;
//     articleCard.append(title);
//     let paragraph = document.createElement("p");
//     paragraph.innerText = text;
//     articleCard.append(paragraph);
//     let linkbt = document.createElement("a");
// linkbt.setAttribute("href", `article.html?articleId=${id}`);
// linkbt.textContent = "Читать далее";
// articleCard.append(linkbt);
//     articleSection.appendChild(articleCard);
// };


