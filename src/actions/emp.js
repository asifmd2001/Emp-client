import * as api from '../api';

export const getEmps = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmps();
    const action = { type: 'FETCH_ALL', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const createEmp = (post) => async (dispatch) => {
  try {
    const { data } = await api.createEmp(post);
    const action = { type: 'CREATE', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
