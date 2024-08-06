import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData, redeemPoints } from "../redux/userSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUserData());
    }
  }, [userStatus, dispatch]);

  const handleRedeemPoints = () => {
    dispatch(redeemPoints());
  };

  return (
    <div className="container app mt-5 mb-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card profile-card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center text-white">
              <span>User Profile</span>
              <button className="btn btn-sm btn-secondary">Edit</button>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                  <img
                    src={
                      user.profilePicture || "https://via.placeholder.com/150"
                    }
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
                <div className="col-12 col-md-9 d-flex flex-column">
                  <h2>Name: {user.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card points-card">
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Today's Points</th>
                    <th scope="col">Total Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.points.today}</td>
                    <td>{user.points.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={handleRedeemPoints}>
                Redeem Points
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
