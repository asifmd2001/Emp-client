import axios from 'axios';

const url = 'https://node-nhwtpw--5000.local.webcontainer.io/emp';

export const fetchEmps = () => axios.get(url);

export const createEmp = (newEmp) => axios.post(url,newEmp); 