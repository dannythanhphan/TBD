import axios from "axios";

export const create = (charId) => {
  return axios.post(`/api/lobbies/create/${charId}`);
};

export const join = (id, charId) => {
  return axios.patch(`/api/lobbies/join/${id}/${charId}`);
};

export const leave = (id, charId) => {
  return axios.patch(`/api/lobbies/leave/${id}/${charId}`);
};

export const getLobby = key => {
  return axios.get(`/api/lobbies/${key}`)
};
