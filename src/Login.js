import React from "react";
import Login from "./Login.css";


const login = () => {
  const signup=()=>{

  var userdata = [
    { username: "shafeeq", passcode: 123, cart: [] },
    { username: `NivasOg`, passcode: 12, cart: [] },
    { username: `Sk21`, passcode: 1234, cart: [] },
  ];


  var username=document.getElementById('username').value;
  var userpasscode=document.getElementById('passcode').value;
  var activeuserdetails=userdata.filter((data)=>{
      return username==data.username;
  });

  console.log(activeuserdetails);


  if(activeuserdetails.length>0)
  {
    if(activeuserdetails[0].passcode==userpasscode){
      localStorage.setItem('username',username);
      localStorage.setItem('password',userpasscode);
      window.location.replace("/Home");
      
    }else{
      alert("wrong passcode");
    }
      
    }
};


  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <h1>LOGIN</h1>

          <input id='username' className="c5" placeholder="USERNAME"></input>
          <input id='passcode' type="password" className="c5" placeholder="PASSWORD"></input>

          <button onClick={signup} className="bt1">LOGIN</button>
          <h5>FORGOT PASSWORD?</h5>
        </div>
      </div>
    </div>
  );
};

export default login;
