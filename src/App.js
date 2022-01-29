import React, { useState } from "react";
import "./style.css";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Read from "./components/read/Read.js";
import Delete from "./components/delete/Delete.js";
import "./components/banner/banner.css";
var EmpComponent = null;
export default function App() {

  const [empComponent, setEmpComponent] = useState(1);
  if (empComponent === 1) {
    EmpComponent = Create;
  } else if (empComponent === 3) {
    EmpComponent = Update;
  } else if (empComponent === 2) {
    EmpComponent = Read;
  } else {
    EmpComponent = Delete;
  }

  // const style = '{{ paddingLeft: "33%" }}';
  return (
    <div>
      <h1>Employee Management</h1>
      <div></div>
      <h5>OpenBook Assignment Submitted By MOHAMED ASIF SM</h5>
      <div>
        <button onClick={() => setEmpComponent(1)} className="button">
          CREATE
        </button>
        <d className="d" />
        <button onClick={() => setEmpComponent(2)} className="button">
          READ
        </button>
        <d className="d" />
        <button onClick={() => setEmpComponent(3)} className="button">
          UPDATE
        </button>
        <d className="d" />
        <button onClick={() => setEmpComponent(4)} className="button">
          DELETE
        </button>
      </div>
      <EmpComponent />
      {/* <Create />
      <Update />
      <Read />
      <Delete /> */}
    </div>
  );
}
