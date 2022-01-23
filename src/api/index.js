import axios from 'axios';

// const pu = 'https://cors-anywhere.herukuapp.com/';
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// const url = 'https://node-nhwtpw--5000.local.webcontainer.io/emp';
const url = "https://emp-backend.mohamed-asifasi.repl.co/emp";

export const fetchEmps = () => axios.get(url);

export const createEmp = (newEmp) => axios.post(url, newEmp);

export const updateEmp = (id, updatedEmp) => axios.patch(`${url}/${id}`, updatedEmp);

export const deleteEmp = (id)=> axios.delete(`${url}/${id}`);