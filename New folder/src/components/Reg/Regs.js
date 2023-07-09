import axios from 'axios';
import React, { useState } from 'react';
import './Reg.css'
import Reg from "./Photos/reg.png"
import { Link } from "react-router-dom";

function UserHome() {


  /* INPUT DETAILS ASSIGN VARIABLE NAME */
  const [inputs, setInputs] = useState({
    userName: '',
    userPhone: '',
    userGmail: '',
    userPassword: '',
  });

  const [checked, setChecked] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /* SEND INPUT DETAILS TO DATABASE */
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      userName: String(inputs.userName),
      userPhone: String(inputs.userPhone),
      userGmail: String(inputs.userGmail),
      userPassword: String(inputs.userPassword),
      UserAgree: String(checked)
    }).then(res => res.data);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest()
    .then(() => alert("Register Successfully"))
    window.location.href = 'http://localhost:3000/adduserH';
  };

  return (

    <div  >
      
<div className='form-container'>
<div className='ful'>
      <div class="row">
  <div class="column" >
  <img src={Reg} className="regp" alt="signin logo" /> 
  </div>
  <div class="column" >
    <br></br>
  <h2 className='r-h1'>Create Account</h2>
  <h4 className='r-subheading'>Welcome to Our Family ! Please enter your details.</h4>
  <br></br>
  <form className=" ff"onSubmit={handleSubmit}>
        <label className ="fmhd "For="userName">Name:</label><br />
        <input className='input' type="text" id="userName" name="userName" value={inputs.userName} required onChange={handleChange} /><br /><br />

        <label className ="fmhd "For="userPhone">Phone:</label><br />
        <input className='input' type="text" id="userPhone" name="userPhone" value={inputs.userPhone} required onChange={handleChange} /><br /><br />

        <label className ="fmhd "For="userGmail">Email:</label><br />
        <input className='input' type="email" id="userGmail" name="userGmail" value={inputs.userGmail} required onChange={handleChange} /><br /><br />

        <label className ="fmhd "For="userPassword">Password:</label><br />
        <input className='input' type="password" id="userPassword" name="userPassword" value={inputs.userPassword} required onChange={handleChange} /><br /><br />

        
        <input  type="checkbox" id="UserAgree" name="UserAgree" checked={checked} onChange={() => setChecked(!checked)} />
        <label className ="fmhd "For="UserAgree">Agree to Terms </label><br /><br />

        <div className='rgbtn'>
          <button type="submit" className='regbtn'  >submit</button>
          </div>

          <p>Already have an account? <Link to="/loginH"><span className="lg">Log in</span></Link> now</p>
      </form>
  </div>
</div>
</div>
</div>
    </div>
  
  );
}

export default UserHome;
