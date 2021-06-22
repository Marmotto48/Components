import React from "react";
import './App.css';
import ProfilePhoto from '../src/Component/Profile/ProfilePhoto';
import FullName from '../src/Component/Profile/FullName';
import Address from '../src/Component/Profile/Address';

function App() {
  return (
    <div className="App">
        <h1>Welcome To MyProfile</h1>
         <ProfilePhoto />
         <FullName />
         <Address />
    </div>
  );
}

export default App;
