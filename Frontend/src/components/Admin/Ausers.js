import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const User = (props) => {
  const history = useNavigate();
  const { _id, userName, userPhone, userGmail, userPassword } = props.user;

  // Handler for deleting user details
  const deleteHandler = async () => {
    // Show confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      try {
        // Send DELETE request to the server
        await axios.delete(`http://localhost:5000/users/${_id}`);

        // Perform necessary actions after successful deletion
        alert("Details deleted successfully");
        history("/");
        history("/adminHome");
      } catch (error) {
        console.error("Error deleting user details:", error);
      }
    }
  };

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
              <div className="btn">
                <Link to={`/Ausers/${_id}`} className="updatebtn">Update</Link>
              </div>

              {/* Button to delete user details */}
              <div className="btn">
                <button className="bottone6" onClick={deleteHandler}>Delete</button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default User;
