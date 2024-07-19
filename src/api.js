// const BASE_URL = 'https://learn.codeit.kr/api/codestudit';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d11965d5a4b46de827e8d9b19c961e3d&language=ko-KR';

//&page=${page} 페이지 수

export async function getPosts() {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}
