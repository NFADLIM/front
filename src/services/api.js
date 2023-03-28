import axios from 'axios';
const BASE_URL = 'https://fair-cyan-piglet-yoke.cyclic.app';

const getAllGedung = () => {
	return axios.get(`${BASE_URL}/gedung/list`);
};
const getGedungById = (idGedung) => {
	return axios.get(`${BASE_URL}/gedung/${idGedung}`);
};
const addGedung = (bodyJSON) => {
	return axios.post(`${BASE_URL}/gedung/add`, bodyJSON);
};
const updateGedung = (idGedung, bodyJSON) => {
	return axios.put(`${BASE_URL}/gedung/update/${idGedung}`, bodyJSON);
};
const deleteGedung = (idGedung) => {
	return axios.delete(`${BASE_URL}/gedung/delete/${idGedung}`);
};
const getAllFasilitas = () => {
	return axios.get(`${BASE_URL}/fasilitas/list`);
};
const getFasilitasById = (idFasilitas) => {
	return axios.get(`${BASE_URL}/fasilitas/${idFasilitas}`);
};
const addFasilitas = (bodyJSON) => {
	return axios.post(`${BASE_URL}/fasilitas/add`, bodyJSON);
};
const updateFasilitas = (idFasilitas, bodyJSON) => {
	return axios.put(`${BASE_URL}/fasilitas/update/${idFasilitas}`, bodyJSON);
};
const deleteFasilitas = (idFasilitas) => {
	return axios.delete(`${BASE_URL}/fasilitas/delete/${idFasilitas}`);
};

const login = (bodyJSON) => {
	return axios.post(`${BASE_URL}/login`, bodyJSON);
};

export {
	getAllGedung,
	getGedungById,
	getAllFasilitas,
	getFasilitasById,
	addGedung,
	addFasilitas,
	deleteGedung,
	deleteFasilitas,
	updateGedung,
	updateFasilitas,
	login,
};
