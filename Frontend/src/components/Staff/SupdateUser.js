import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../User/Update.css';
import Nav from '../Home/Nav';

const UpdateUser = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };

    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/users/${id}`, {
      id: String(inputs.id),
      userName: String(inputs.userName),
      userPhone: String(inputs.userPhone),
      userGmail: String(inputs.userGmail),
      userPassword: String(inputs.userPassword),
    }).then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => alert("Details Updated Successfully"))
      .then(() => history("/staffHome"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Nav />
      <h2 className='Uh2'>User Details Update Form</h2><br></br>
      <div className='container'>
        {inputs && (
          <form className='Ufom' onSubmit={handleSubmit}>
            <tr className='ipt'>
              <td className='ipt'><label htmlFor="userName">Name :</label></td>
              <td className='ipt'><input className='input' type="text" id="userName" name="userName" value={inputs.userName} required onChange={handleChange} /></td>
            </tr>
            <tr className='ipt'>
              <td className='ipt' ><label htmlFor="userPhone">Phone :</label></td>
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
            <br></br>
            <div className='btnn'>
              <button type="submit" className='btnsub'>submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateUser;
