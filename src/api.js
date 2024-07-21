// const BASE_URL = 'https://learn.codeit.kr/api/codestudit';
const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

//&page=${page} 페이지 수

export async function getPosts({ pageParam = 2 }) {
  const response = await fetch(`${BASE_URL}&page=${pageParam}`);
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  return await response.json();
}
