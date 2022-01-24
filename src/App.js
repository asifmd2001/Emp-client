import React from "react";
import "./style.css";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Read from "./components/read/Read.js";
import Delete from "./components/delete/Delete.js";

export default function App() {
  return (
    <div style={{ paddingLeft: "33%" }}>
      {/* <Create /> */}
      {/* <Update/> */}
      <Read />
      {/* <Delete /> */}
    </div>
  );
}
