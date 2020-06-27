import React from "react";
import "./App.css";
import SiteBar from "./SiteBar/SiteBar";
import Admins from "./Content/Admins/Admins";
import Users from "./Content/Users/Users";
import Search from "./Content/SearchUser/Search";
import Zayvki from "./Content/Zayvki/Zayvki";
import Zadaniy from "./Content/Zadaniy/Zadaniy";
import Campani from "./Content/Campani/Campani";
import {Route, BrowserRouter} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
        <SiteBar />
        <Route path='/admins' component={Admins} />
        <Route path='/users' component={Users} />
        <Route path='/search' component={Search} />
        <Route path='/zayvki' component={Zayvki} />
        <Route path='/zadaniy' component={Zadaniy} />
        <Route path='/campani' component={Campani} />
    </div>
    </BrowserRouter>
  );
};

export default App;
