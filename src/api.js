// const BASE_URL = 'https://learn.codeit.kr/api/codestudit';
const BASE_URL = 'http://api.kcisa.kr/openapi/service/rest/meta14/getKMPC031801?serviceKey=854f4923-0a54-4479-b114-bd82979e3fac';
// const BASE_URL = 'http://api.kcisa.kr/openapi/service/rest/meta14/getKMPC031801?serviceKey=854f4923-0a54-4479-b114-bd82979e3fac&numOfRows=10&pageNo=1';

export async function getPosts() {
  const {response} = await fetch(`${BASE_URL}`);
  return await response.json();
}
