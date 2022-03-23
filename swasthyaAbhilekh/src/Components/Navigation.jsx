import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Swasthya Abhilekh
          </NavLink>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/DoctorDashboard">
                  Doctor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserDashboard">
                  User
                </NavLink>
              </li>
              <li className="nav-item ml-4">
                <NavLink className="nav-link border" to="/SignInPage">
                  SignIn
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navbar-brand" to="/Doctorprofile">
            <img src="" class="img-thumbnail"/>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;