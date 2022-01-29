import * as api from "../api";

export const getEmps = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmps();

    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log( error);
  }
};
export const createEmp = (emp) => async (dispatch) => {
  try {
    const { data } = await api.createEmp(emp);
    const action = { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updateEmp = (id, emp) => async (dispatch) => {
  try {
    const { data } = await api.updateEmp(id, emp);
    const action = { type: "UPDATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmp = (id) => async (dispatch) => {
  try {
    await api.deleteEmp(id);

    const action = { type: "DELETE", payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
