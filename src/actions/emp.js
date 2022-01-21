import * as api from  "../api";

export const getEmps = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEmps();
        const action = { type: "FETCH_ALL", payload: data };
        dipatch(action);
    }
    catch (error) {
        console.log(error);
    }
};
export const createEmp = (post) => async (dipatch) => {
    try {
        const { data } = await api.createEmp(post);
        const action = { type: "CREATE", payload: data };
        dipatch(action);
    }
    catch (error) {
        console.log(error);
    }
};
