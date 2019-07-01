import { baseUrl } from './urls';
export function getData(data) {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
}
export function postData(body) {

  return fetch(baseUrl + '/signUp', {
    method: 'post', body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  });
}