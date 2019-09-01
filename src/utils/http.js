import { baseUrl } from './urls';
export function getData(data) {
  return fetch(`${baseUrl}/${data}`).then(function (response) {
    debugger;
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