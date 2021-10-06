/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Missions from './Missions';
import MyProfile from './MyProfile';
import Navbar from '../components/Navbar';
import Rocket from '../components/Rocket';
import RocketsList from '../components/RocketsList';

const Rockets = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <RocketsList />
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
