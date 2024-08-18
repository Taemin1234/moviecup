const API_KEY = process.env.REACT_APP_API_KEY


// const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&with_genres=28`;

//&page=${page} 페이지 수

export async function getPosts({ pageParam = 1, withGenres = '', withOriginalLanguage = ''}) {

  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=${withGenres}&with_original_language=${withOriginalLanguage}`;
  
  const response = await fetch(`${BASE_URL}&page=${pageParam}`);
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  return await response.json();
}
