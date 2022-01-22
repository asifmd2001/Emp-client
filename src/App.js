import React from 'react';
import './style.css';
import Create from './components/create/Create';
import Update from './components/update/Update';

export default function App() {
  return (
    <div style={{"padding-left":"33%"}}>
      {/* <Create /> */}
      <Update/>
    </div>
  );
}
