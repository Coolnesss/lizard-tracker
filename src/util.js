import axios from 'axios';

export const URL = "http://192.168.1.239:3000/"

const headers = {
  "X-Key-Inflection": "camel",
  'Content-Type': 'application/json'
}

export const postEntry = (entry) => {
  return axios.post(URL + "entries", {entry}, {headers});
}

