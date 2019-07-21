import { baseUrl } from './urls';
export function getData(data) {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
}
export function postData(body, url) {

  return fetch(baseUrl + `/${url}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}