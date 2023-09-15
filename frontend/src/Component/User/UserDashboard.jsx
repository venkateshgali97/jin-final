

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Router,Routes,Route,Navigate,Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer } from "react-toastify";
import UserEvents from "./Events/Events";

// import Users from "./UserProfile/Users";
// import UserEvents from "./Events";
// import Events from "./Events";
const UserDashBoard = () =>{
    const email = localStorage.getItem('email')
    const navigate = useNavigate()
    useEffect(() =>{
        const jsonToken = localStorage.getItem('jwt')
        !jsonToken && navigate("/")
    })
  
      return (
       <>
        <div className="app-container">
          {/* Sidebar/Navigation */}
          <div className="sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <Link to="events">Events</Link>
                </li>
                <li>
                  <Link to="">Birthdays</Link>
                </li>
                <li>
                  <Link to="">Holidays</Link>
                </li>
                <li>
                    <i className="" onClick={() => navigate("/")}>Logout</i> 
                </li>
              </ul>
            </nav>
          </div>
  
          {/* Main Content */}
          <div className="main-content">
            
            <Routes>
              <Route path="events" element={<UserEvents />} />
              {/* <Route path="profile" element={<UserProfile_ProjectAllocation />} /> */}
              
            </Routes>
          </div>
        </div>
        </>
      );
      

}


export default UserDashBoard