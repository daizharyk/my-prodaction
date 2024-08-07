
import articlesData from "./article.json" with { type: "json" };


export let articleElements = articlesData.articles.map((article) =>{
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

export function getAllArticles(){
  return articlesData.articles
};



