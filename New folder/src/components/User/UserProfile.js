import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from "./User";
import Nav from "../Home/Nav";

const URL = "http://localhost:5000/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const getMaxIdUser = () => {
    if (users.length === 0) {
      return null;
    }
    const maxIdUser = users.reduce((prev, curr) => (curr._id > prev._id ? curr : prev));
    return maxIdUser;
  };

  const maxIdUser = getMaxIdUser();

  return (
    <div>
      <Nav />
      <h2 className='Uh2'>User Registration Details</h2>
      {maxIdUser && <User user={maxIdUser} />}
    </div>
  );
};

export default Users;
