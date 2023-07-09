import React from "react";
import { Route, Routes } from "react-router-dom";

import MainHome from "./components/Home/MainHome";
import AdminHome from "./components/Admin/AdminHome";
import StaffHome from "./components/Staff/StaffHome";
import AddUserA from "./components/Admin/AaddUser";
import UpdateUser from "./components/User/UpdateUser";
import AupdateUser from "./components/Admin/AupdateUser";
import SupdateUser from "./components/Staff/SupdateUser";
import AddUserS from "./components/Staff/SaddUser";
import FirstHome from "./components/Home/FirstHome";
import Regs from "./components/Reg/Regs";
import Login from "./components/Login/Login";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Route configuration */}
        <Route path="/" element={<FirstHome />} />
        <Route path="/AmainHome" element={<FirstHome />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/staffHome" element={<StaffHome />} />
        <Route path="/Aadduser" element={<AddUserA />} />
        <Route path="/users/:id" element={<UpdateUser />} />
        <Route path="/Ausers/:id" element={<AupdateUser />} />
        <Route path="/Susers/:id" element={<SupdateUser />} />
        <Route path="/maiHome" element={<MainHome />} />
        <Route path="/Sadduser" element={<AddUserS />} />
        <Route path="/reg" element={<Regs />} />
        <Route path="/loginH" element={<Login />} />
        <Route path="/adduserH" element={<UserProfile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
