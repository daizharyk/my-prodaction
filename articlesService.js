export function getAllArticles(){
  return fetchAllArticles.length
};


export async function fetchAllArticles(limit = 10) {
  const response = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
  const data = await response.json();
  return data.posts;
}




export async function fetchPostById(Id) {
  const response = await fetch(`https://dummyjson.com/posts/${Id}`);
  const post = await response.json();
  return post;
};

export async function fetchAllArticlesCount() {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  return data.posts.length
}

