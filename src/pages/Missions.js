import React from 'react';
import '../css/missions.css';

const Missions = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-10 pt-2 mx-auto">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">
                <span className="d-none">.</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Thaicom</th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla molestie erat mi, ut viverra quam sagittis vel.
                In suscipit sem dolor, a posuere nibh fringilla sit amet.
                Cras blandit aliquam sapien, et porttitor nisl porttitor quis.
                Suspendisse potenti.
                Morbi dapibus orci magna, maximus vestibulum lorem efficitur eu.
                Vestibulum tincidunt nec nisl ut ultrices.
              </td>
              <td>
                <p className="not-a-menber yes-menber">Active Menber</p>
                <p className="not-a-menber">NOT A MENBER</p>
              </td>
              <td>
                <button type="button" className="join-mission leave-mission">Leave Mission</button>
                <button type="button" className="join-mission">Join Mission</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Missions;
