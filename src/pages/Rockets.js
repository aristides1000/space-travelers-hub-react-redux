import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Missions from './Missions';
import MyProfile from './MyProfile';
import Navbar from '../components/Navbar';
import RocketsList from '../components/RocketsList';

function Rockets() {
  const { missionReducer } = useSelector((state) => state);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <RocketsList />
        </Route>
        <Route path="/missions" exact render={() => <Missions store={missionReducer} />} />
        <Route path="/my-profile" render={() => <MyProfile missions={missionReducer} />} />
      </Switch>
    </>
  );
}

export default Rockets;
