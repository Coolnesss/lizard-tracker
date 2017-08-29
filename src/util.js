import axios from 'axios';

export const URL = "http://192.168.1.239:3000/"

const headers = {
  "X-Key-Inflection": "camel",
  'Content-Type': 'application/json'
}

export const postEntry = (entry) => {
  return axios.post(URL + "entries", {entry}, {headers});
}

export const getEntries = () => {
  return axios.get(URL + "entries", { headers });
}

export const getEntry = (id) => {
  return axios.get(URL + `entries/${id}`, { headers });
}

export const putEntry = (id, entry) => {
  return axios.put(URL + `entries/${id}`, { entry } ,{ headers })
}