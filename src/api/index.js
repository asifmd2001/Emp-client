import axios from 'axios';

// const pu = 'https://cors-anywhere.herukuapp.com/';

const url = 'https://node-nhwtpw--5000.local.webcontainer.io/emp';

export const fetchEmps = () => axios.get(url);

export const createEmp = (newEmp) => axios.post(url, newEmp);
