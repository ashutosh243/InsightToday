const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "7c606cd959bb1af4dc374ba1a99f535c";
//api url
const endpointPath = (country, category) =>{
   return `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
}
const endpointSearch = (searchQuery) =>{

  return `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
}
export {endpointPath, endpointSearch}