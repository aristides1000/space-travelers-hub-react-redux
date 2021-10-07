/* eslint-disable react/prop-types */
import React from 'react';

const MyProfile = ({ missions, rocket }) => {
  const getReseveredItems = (store) => store.filter((element) => element.reserved === true);
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-10 pt-3">
          <div className="row">
            <div className="col-6">
              <h3>My Missions</h3>
              <ul className="list-group">
                {getReseveredItems(missions).map((element) => (
                  <li className="list-group-item pb-4 fs-5" key={element.mission_name}>{element.mission_name}</li>
                ))}
              </ul>
            </div>
            <div className="col-6">
              <h3>My Rockets</h3>
              <ul className="list-group">
                {getReseveredItems(rocket).map((element) => (
                  <li
                    className="list-group-item pb-4 fs-5"
                    key={element.rocketName}
                  >
                    {element.rocketName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile.propTypes = {
//   missions: Proptypes.shape({}).isRequired,
// };
export default MyProfile;
