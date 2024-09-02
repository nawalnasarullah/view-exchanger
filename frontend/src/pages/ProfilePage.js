import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  useEffect(() => {}, []);

  const handleRedeemPoints = () => {};

  return (
    <div className="container app mt-5 mb-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card profile-card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center text-white">
              <span>User Profile</span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
                  <img
                    src={user?.user?.avatar}
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
                  <h4 className="text-center text-md-start">
                    Username: {user?.user?.username}
                  </h4>
                  <h4 className="text-center text-md-start">
                    Name: {user?.user?.firstName} {user?.user?.lastName}
                  </h4>
                  <h4 className="text-center text-md-start">
                    Email: {user?.user?.email}
                  </h4>
                  <h4 className="text-center text-md-start">
                    Phone no: {user?.user?.phoneNumber}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
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
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-primary btn-block"
                onClick={handleRedeemPoints}
              >
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
