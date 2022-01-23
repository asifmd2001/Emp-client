export default (emps = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...emps, action.payload];
    case "UPDATE":
      return emps.map((emp) =>
        emp._id === action.payload._id ? action.payload : emp
      );
    case "DELETE":
      return emps.filter((emp) => emp._id !== action.payload);
    default:
      return emps;
  }
};
