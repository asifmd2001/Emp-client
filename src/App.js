import React, { useState } from "react";
import "./style.css";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Read from "./components/read/Read.js";
import Delete from "./components/delete/Delete.js";
import "./components/banner/banner.css";
var RE = null;
export default function App() {
  const [a, Seta] = useState(1);
  if (a === 1) {
    RE = Create;
  } else if (a === 3) {
    RE = Update;
  } else if (a === 2) {
    RE = Read;
  } else {
    RE = Delete;
  }

  const style = '{{ paddingLeft: "33%" }}';
  return (
    <div>
      <div>
        <button onClick={() => Seta(1)} className="button">
          CREATE
        </button>
        <d className="d" />
        <button onClick={() => Seta(2)} className="button">
          READ
        </button>
        <d className="d" />
        <button onClick={() => Seta(3)} className="button">
          UPDATE
        </button>
        <d className="d" />
        <button onClick={() => Seta(4)} className="button">
          DELETE
        </button>
      </div>
      <RE />
      {/* <Create />
      <Update />
      <Read />
      <Delete /> */}
    </div>
  );
}
