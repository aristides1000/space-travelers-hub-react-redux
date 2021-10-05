import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Missions from './Missions';
import MyProfile from './MyProfile';
import Navbar from '../components/Navbar';

const Rockets = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <div>
          <h3>I am in Rockets page</h3>
        </div>
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
    </Switch>
  </>
);
export default Rockets;
