export default (emps=[], action)=>{
   switch(action.type){
    case "FETCH_ALL":
      return action.payload;
   case "CREATE":
      return [...emps , action.payload]
  default:
    return emps;
   }
}