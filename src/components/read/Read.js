import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmps } from "../../actions/emp";
import { useAlert } from "react-alert";
import "./read.css";
export default function Read() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentId, SetcurrentId] = useState(0);
  const [Seet, SetSet] = useState(0);
  const [empData, setEmpData] = useState({
    firstName: "",
    surName: "",
    email: "",
    dob: "",
    gender: ""
  });

  const [empId, SetempId] = useState({
    id: ""
  });
  useEffect(() => {
    dispatch(getEmps());
  }, [dispatch]);

  // const emp = useSelector((state) => currentId? state.emps.find(currentId):null);
  const emp = useSelector((state) =>
    currentId ? state.emps.find((p) => p._id === currentId) : null
  );

  console.log(emp);

  useEffect(() => {
    if (Seet && emp) setEmpData(emp);
    else if (empId.id.length > 2) {
      alert.show("employee not found");
      SetSet(0);
    }
  }, [emp]);
  const clear = () => {
    setEmpData({
      firstName: "",
      surName: "",
      email: "",
      dob: "",
      gender: ""
    });
    SetempId({
      id: ""
    });
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
          onChange={(e) => SetempId({ ...empId, id: e.target.value })}
        />
      </label>
      <label>
        <span> </span>
        <button
          className="button"
          onClick={() => {
            SetcurrentId(empId.id);
            SetSet(true);
          }}
        >
          Find
        </button>
      </label>

      <div className="form-style-2-heading">Employee Details</div>

      <label htmlFor="firstName">
        <span>First Name</span>
        <input
          disabled={true}
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
          disabled={true}
          type="text"
          className="input-field"
          name="surName"
          value={empData.surName}
          onChange={(e) => setEmpData({ ...empData, surName: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          disabled={true}
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
          disabled={true}
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
          {" "}
          Male
          <input
            disabled={true}
            className="radio"
            type="radio"
            value="male"
            name="gender"
            checked={empData.gender === "male"}
            onChange={(e) => setEmpData({ ...empData, gender: e.target.value })}
          />
        </label>
        <label className="label-radio">
          {" "}
          Female
          <input
            disabled={true}
            className="radio"
            type="radio"
            value="female"
            name="gender"
            checked={empData.gender === "female"}
            onChange={(e) => setEmpData({ ...empData, gender: e.target.value })}
          />
        </label>
      </label>
      <label>
        <span> </span>
        <button
          className="button"
          onClick={() => {
            clear();
          }}
        >
          Clear
        </button>
      </label>
    </div>
  );
}
