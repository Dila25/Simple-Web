import React from 'react';
import { Link } from "react-router-dom";
import'./Staff.css';

const User = (props) => {
  const { _id, userName, userPhone, userGmail, userPassword } = props.user;

  return (
    <div>
      <table id="users">
        <tr>
          <td><h3>{userName}</h3></td>
          <td><h3>{userPhone}</h3></td>
          <td><h3>{userGmail}</h3></td>
          <td><h3>{userPassword}</h3></td>
          <td>
            <div className="button-container">
              {/* Link to update user details */}
              
              <div className="btnStf">
                <Link to={`/Susers/${_id}`} className="updatebtn">Update</Link>
              </div>

              {/* Button to delete user details */}

            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default User;
