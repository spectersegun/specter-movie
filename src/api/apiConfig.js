const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4bcf6240c6853f10d68b5972d4995484",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
