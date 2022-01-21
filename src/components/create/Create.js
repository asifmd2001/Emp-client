import React, { useState } from 'react';
import { createEmp } from '../../actions/emp';
import { useDispatch } from 'react-redux';

import './style.css';
export default function Create() {
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState({
    firstName: '',
    surName: '',
    email: '',
    dob: '',
    gender: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmp(empData));
    console.log(empData);
  };
  return (
    <div className="form-style-2">
      <div className="form-style-2-heading">Provide your information</div>
      <form onSubmit={handleSubmit}>
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
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}
