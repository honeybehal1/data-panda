import { baseUrl } from './urls';
const token = localStorage.getItem('authorization');
export function getData(data) {
  return fetch(`${baseUrl}/${data}`, {
    headers: {
      'authorization': token
    }
  }).then(function (response) {
    return response.json();
  });
}
export function postData(body, url) {

  return fetch(baseUrl + `/${url}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'authorization': localStorage.getItem('authorization'),
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  });
}

export function setLoggedInData(data = {}) {
  const { body = {} } = data;
  const { code = 0, } = body;
  localStorage.setItem("authorization", null);
  if (code === 204 || code === 200) {
    localStorage.setItem("authorization", data.authorization);
    return true
  }
  return false;

}
