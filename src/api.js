const API_KEY = process.env.REACT_APP_API_KEY

export async function getPosts({ pageParam = 1, withGenres = '', withOriginalLanguage = '', startYear = '', endYear = '' }) {

  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=${withGenres}&with_original_language=${withOriginalLanguage}&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`;

  const response = await fetch(`${BASE_URL}&page=${pageParam}`);
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  return await response.json();
}
