
import {fetchPostById} from "./articlesService.js";

const params = new URLSearchParams(location.search)

const articleId = params.get("articleId");


const article = await fetchPostById(articleId);

if (article) {
  const { title, body} = article;

  const titleElement = document.getElementById("title");
  titleElement.textContent = title;

  const textElement = document.getElementById("text");
  textElement.textContent = body;


} else {
  alert(`Article with ID ${articleId} not found.`)
}

