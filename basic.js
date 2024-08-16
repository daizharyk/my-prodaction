
import { fetchAllArticles,fetchAllArticlesCount } from "./articlesService.js";

let allArticles = document.getElementById("allarticles");
let contacts = document.getElementById("contacts");





  const count = await fetchAllArticlesCount();
  allArticles.querySelector("a").textContent = `Все статьи  (${count})`;



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



 function displayArticles(articles) {
  articleSection.innerHTML = "";

  let header = document.createElement("h2");
  header.textContent = "Статьи";
  articleSection.append(header);
  
let articleElements = articles.map((article) =>{
  let { title, body, id } = article;
  
  let articleCard = document.createElement("article");
  articleCard.className = "section_element";

  let titles = document.createElement("h2");
  titles.textContent = title;
  articleCard.append(titles)

  let paragraph = document.createElement("p");
  paragraph.textContent = body.substring(0, 100) + '....';
  articleCard.append(paragraph);

  let linkbt = document.createElement("a");
  linkbt.setAttribute("href", `article.html?articleId=${id}`);
  linkbt.textContent = "Читать далее";
  articleCard.append(linkbt);
  return articleCard;
  });

  articleSection.append(...articleElements);

  let button = document.createElement("button");
  button.addEventListener("click", nextArticlesList);
  button.textContent = "Далее";
  articleSection.append(button);
}

const articles = await fetchAllArticles();
  displayArticles(articles);

let skipArticles = 0;
async function nextArticlesList() {
  let response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skipArticles}`
  ).then((res) => res.json());
  console.log(response);
  
  displayArticles(response.posts);
  skipArticles += 10;
}



  





