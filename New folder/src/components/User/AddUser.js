import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserHome() {
  const history = useNavigate();

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
    sendRequest().then(
      history('/adduserHome')
    );
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Name:</label>
        <input type="text" id="userName" name="userName" value={inputs.userName} required onChange={handleChange} /><br /><br />

        <label htmlFor="userPhone">Phone:</label>
        <input type="text" id="userPhone" name="userPhone" value={inputs.userPhone} required onChange={handleChange} /><br /><br />

        <label htmlFor="userGmail">Email:</label>
        <input type="email" id="userGmail" name="userGmail" value={inputs.userGmail} required onChange={handleChange} /><br /><br />

        <label htmlFor="userPassword">Password:</label>
        <input type="password" id="userPassword" name="userPassword" value={inputs.userPassword} required onChange={handleChange} /><br /><br />

        <label htmlFor="UserAgree">Agree to Terms:</label>
        <input type="checkbox" id="UserAgree" name="UserAgree" checked={checked} onChange={() => setChecked(!checked)} /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserHome;
