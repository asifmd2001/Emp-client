import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { updateEmp } from '../../actions/emp';

import './update.css';
export default function Create() {
  const dispatch = useDispatch();
  
  const [empData, setEmpData] = useState({
    firstName: '',
    surName: '',
    email: '',
    dob: '',
    gender: '',
  });
  const [empId, SetEmpID] = useState({
    id:""
  });
  const [Seet, SetSet] = useState(null);
  const emp= useSelector((state)=> empId.id ? state.emps.find((p)=> p._id == empId.id):null);

  useEffect(()=>{
    if(Seet)
    setEmpData(emp);
  },[emp])
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if(Seet){
    dispatch(updateEmp(empId, empData))
    }
    else{
     console.log("asi");
    }
  };
  return (
    <div className="form-style-2">
      <div className="form-style-2-heading">Enter the Id</div>
        <label htmlFor="id">
          <span>Employee Id</span>
          <input
            type="text"
            className="input-field"
            name="id"
            value={empId.id}
            onChange={(e) =>
              SetEmpID({...empId, id: e.target.value })
            }
          />
        </label>
        <label>
          <span> </span>
          <button className="button" onClick={()=>SetSet(true)} >Find</button>
        </label>
        
      <div className="form-style-2-heading">Update Your Info</div>
      <form onSubmit={handleSubmitUpdate}>
        <label htmlFor="firstName">
          <span>First Name</span>
          <input
            type="text"
            className="input-field"
            name="firstName"
            value={empData.firstName}
            onChange={(e) =>
              setEmpData({ ...empData, firstName: e.target.value })
            }
          />
        </label>
        <label htmlFor="surName">
          <span>Sur Name</span>
          <input
            type="text"
            className="input-field"
            name="surName"
            value={empData.surName}
            onChange={(e) =>
              setEmpData({ ...empData, surName: e.target.value })
            }
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            className="input-field"
            name="email"
            value={empData.email}
            onChange={(e) => setEmpData({ ...empData, email: e.target.value })}
          />
        </label>
        <label htmlFor="dob">
          <span>Date Of Birth</span>
          <input
            type="Date"
            className="input-field"
            name="dob"
            value={empData.dob}
            onChange={(e) => setEmpData({ ...empData, dob: e.target.value })}
          />
        </label>
        <label className="radio1" htmlFor="field4">
          <span>Gender</span>
          <label className="label-radio">
            {' '}
            Male
            <input
              className="radio"
              type="radio"
              value="male"
              name="gender"
              onChange={(e) =>
                setEmpData({ ...empData, gender: e.target.value })
              }
            />
          </label>
          <label className="label-radio">
            {' '}
            Female
            <input
              className="radio"
              type="radio"
              value="female"
              name="gender"
              onChange={(e) =>
                setEmpData({ ...empData, gender: e.target.value })
              }
            />
          </label>
        </label>
        <label>
          <span> </span>
          <input type="submit" value="Update" />
        </label>
        </form>
    </div>
  );
}