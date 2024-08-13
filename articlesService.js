
import articlesData from "./article.json" with { type: "json" };

export function getAllArticles(){
  return articlesData.articles
};


export function getElementById(id) {
  return articlesData.articles.find(article => article.id === id);
}





