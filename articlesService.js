import {articleSection} from "./basic.js"


import articlesData from "./article.json" with { type: "json" };


console.log(articlesData);



let articleElements = articlesData.articles.map((article) =>{
let { name , text , link} = article;


let articleCard = document.createElement("article");
articleCard.className = "section_element";
let title = document.createElement("h2");
title.textContent = name;
articleCard.append(title)
let paragraph = document.createElement("p");
paragraph.textContent = text;
articleCard.append(paragraph);
let linkbt = document.createElement("a");
linkbt.setAttribute("href", link);
linkbt.textContent = "Читать далее";
articleCard.append(linkbt);
return articleCard;
});

articleSection.append(...articleElements);