import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from "./Ausers";
import { Link } from "react-router-dom";
import Nav from '../Home/Nav';
import './Admin.css';
import { GrAdd } from 'react-icons/gr';

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const AdminHome = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the server
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  console.log(users);
  
  return (
    <div>
      <Nav/>

      
      <div>
        <h2 className='mh2'>Users Registration Details</h2>
        <table id="users">
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Gmail</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </table>
        {/* Render the list of users */}
        {users && users.map((user, i) => (
          <div key={i}>
            {/* Render the User component for each user */}
            <User user={user} />
          </div>
        ))}
      </div>
      <Link to="/Aadduser" className="float">
        <GrAdd className="my-float" />
      </Link>
      <div className="label-container">
        <div className="label-text">Add User</div>
      </div>
    </div>
  )
}

export default AdminHome;
