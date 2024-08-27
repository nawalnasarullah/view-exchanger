import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetMeQuery, useLazyLogoutQuery } from "../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/features/authSlice";


function NavBar() {

  const {isLoading } = useGetMeQuery();

  const {isAuthenticated, user} = useSelector(state=>state.auth)

  const [logout] = useLazyLogoutQuery();

  const navigate = useNavigate();
  

  const handleLogout = async () => {
    const res = await logout().unwrap()
    console.log("logout", res);
    navigate(0);
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link  style={{color:"#FFFFFF"}}className="navbar-brand " to="/">
           VIEW EXCHANGER 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">
                  Contact Us
                </Link>
              </li>
              {
                !isAuthenticated ? <>
                <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
                </> : <>
                <li className="nav-item">
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </li>
                <li className="nav-item">
                <Link className="nav-link profile-link" to="/profilePage">
                <i class="fa-regular fa-user"></i>
                <div className="points">0</div>
                </Link>
              </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
