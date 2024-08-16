
export function fetchAllArticles(limit = 10){
  return fetch(`https://dummyjson.com/posts?limit=${limit}`)
  .then((response)=> response.json())
  .then((data) =>  data.posts)
}



export function fetchPostById(Id) {
  return fetch(`https://dummyjson.com/posts/${Id}`)
    .then((response) => response.json())
    .then((post) =>  post);
}

