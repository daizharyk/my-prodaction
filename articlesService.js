import {articleSection} from "./basic.js"


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

articleSection.append(...articleElements);

const params = new URLSearchParams(location.search)

console.log(params);
const articleId = params.get("articleId");



const currentArticle = articlesData.articles.find((article) =>{
  return article.id === Number(articleId)
});

console.log(currentArticle);

if(currentArticle) {
    const { name, text , id } = currentArticle;
    let articleCard = document.createElement("article");
    articleCard.className = "section_element";
    let title = document.createElement("h2");
    title.innerText = name;
    articleCard.append(title);
    let paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleCard.append(paragraph);
    let linkbt = document.createElement("a");
linkbt.setAttribute("href", `article.html?articleId=${id}`);
linkbt.textContent = "Читать далее";
articleCard.append(linkbt);
    articleSection.appendChild(articleCard);
};
