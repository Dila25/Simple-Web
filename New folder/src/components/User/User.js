import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { _id, userName, userPhone, userGmail, userPassword } = props.user;

  return (
    <div>
      <div className='container'>
        <form className='Ufom'>
        <tr className='ipt'>
          <td className='ipt'><label htmlFor="userName">Name :</label></td>
          <td className='ipt'><input className='input' type="text" id="userName" name="userName" value={userName} readOnly/></td>
          </tr>
          <tr className='ipt'>
          <td className='ipt' ><label htmlFor="userPhone">Phone :</label></td>
          <td className='ipt'><input className='input' type="text" id="userPhone" name="userPhone" value={userPhone} readOnly/></td>
          </tr>
          <tr className='ipt'>
          <td className='ipt'><label htmlFor="userGmail">Email :</label></td>
          <td className='ipt'><input className='input' type="email" id="userGmail" name="userGmail" value={userGmail} readOnly/></td>
          </tr>
          <tr className='ipt'>
          <td className='ipt'><label htmlFor="userPassword">Password :</label></td>
          <td className='ipt'><input className='input' type="password" id="userPassword" name="userPassword" value={userPassword} readOnly/></td>
          </tr>

          <br />
          <div className='btnn'>
            <button>
              <Link to={`/users/${_id}`} className='btnsub'>Update</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
