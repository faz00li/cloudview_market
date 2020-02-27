import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Error404 from './Error404';
import WeeklySchedule from './WeeklySchedule';
import SeasonalCrops from './SeasonalCrops';



function App(){
  return (
    <div className="container-fluid">
      <Header/>
      
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path="/schedule" component={WeeklySchedule} />
        <Route path="/seasons" component={SeasonalCrops} />
        <Route component={Error404} />
       
      </Switch>
    </div>
  );
}

export default App;

