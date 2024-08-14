

import {getElementById} from "./articlesService.js";

const params = new URLSearchParams(location.search)

const articleId = params.get("articleId");


const article = getElementById(Number(articleId));

if (article) {
  const {name , text} = article;

  const titleElement = document.getElementById("title");
  titleElement.textContent = name;

  const textElement = document.getElementById("text");
  textElement.textContent = text;


} else {
  alert(`Article with ID ${articleId} not found.`)
}

  