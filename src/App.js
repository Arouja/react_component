  
import React from "react";
import './App.css';
import Adresse from "./component/profile/Adresse"
import Nom from "./component/profile/Nom"
import ProfilPhoto from "./component/profile/ProfilePhoto"
function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <div>
        <Nom />
        <Adresse />
        </div>
    </div>
  );
}

export default App;
