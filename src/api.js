// import { useSelector } from 'react-redux'

const API_KEY = process.env.REACT_APP_API_KEY

let with_genres = []
let with_original_language=''
let release_dateS = '' 
let release_dateE = ''

const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=${with_genres}&with_original_language=${with_original_language}`;
// const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&with_genres=28`;

//&page=${page} 페이지 수

export async function getPosts({ pageParam = 1 }) {
  // let selectedGenre = useSelector((state) => state.genre)
  // let {startYear, endYear} = useSelector((state) => state.year)
  // let selectLang = useSelector((state) => state.language)

  const response = await fetch(`${BASE_URL}&page=${pageParam}`);
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  return await response.json();
}
