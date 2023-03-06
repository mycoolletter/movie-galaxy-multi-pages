
const Api_Key = "3d89869626b8b5a425dd887fe14ca987";
const linkBeginning = "https://api.themoviedb.org/3/";

  const searchMovies = async (link) => {
    const pageAPI = `${linkBeginning}${link[0]}?api_key=${Api_Key}${link[3]?link[3]:''}`;
    const searchMulti = `${linkBeginning}${link[1]}?api_key=${Api_Key}&query=${link[2]}`
    const API_URL = link[2] ? searchMulti: pageAPI;
    const response = await fetch(API_URL);
    const data =  await response.json();
    return data;

  };

  export {searchMovies, Api_Key, linkBeginning}; 