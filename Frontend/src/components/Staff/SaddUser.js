import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Home/Nav';

function UserHome() {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    userName: '',
    userPhone: '',
    userGmail: '',
    userPassword: '',
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      userName: String(inputs.userName),
      userPhone: String(inputs.userPhone),
      userGmail: String(inputs.userGmail),
      userPassword: String(inputs.userPassword),
      UserAgree: String(checked)
    }).then(res => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest()
      .then(() => alert("Details Added Successfully"))
      .then(() => history('/staffHome'));
  };

  return (
    <div>
      <Nav />
      <h2 className='Uh2'>User Registration Form</h2>
      <div className='container'>
        <form className='Ufom' onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr className='ipt'>
                <td className='ipt'><label htmlFor="userName">Name :</label></td>
                <td className='ipt'><input className='input' type="text" id="userName" name="userName" value={inputs.userName} required onChange={handleChange} /></td>
              </tr>
              <tr className='ipt'>
                <td className='ipt'><label htmlFor="userPhone">Phone :</label></td>
                <td className='ipt'><input className='input' type="text" id="userPhone" name="userPhone" value={inputs.userPhone} required onChange={handleChange} /></td>
              </tr>
              <tr className='ipt'>
                <td className='ipt'><label htmlFor="userGmail">Email :</label></td>
                <td className='ipt'><input className='input' type="email" id="userGmail" name="userGmail" value={inputs.userGmail} required onChange={handleChange} /></td>
              </tr>
              <tr className='ipt'>
                <td className='ipt'><label htmlFor="userPassword">Password :</label></td>
                <td className='ipt'><input className='input' type="password" id="userPassword" name="userPassword" value={inputs.userPassword} required onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <div className='btnn'>
            <button type="submit" className='btnsub'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserHome;
