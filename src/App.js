import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import MyDashboard from "./pages/MyDashboard";
import PostTask from "./pages/PostTask/PostTask";
import BrowseTask from "./pages/BrowseTask";
import Notification from "./pages/Notification";
import Account from "./pages/Account";
import Near from "./pages/Near";
import Map from './pages/Map'
import DashBoard from './pages/Dashboard';
function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/map" exact component={Map}/>
            <Route path="/mydashboard" component={MyDashboard}></Route>
            <Route path="/post_a_task" exact component={PostTask} />
            <Route path="/account" exact component={Account} />
            <Route path="/browse-tasks" exact component={BrowseTask} />
            <Route path="/notification" exact component={Notification}/>
            <Route path="/near" exact component={Near}/>
            <Route path="/dashboard" exact component={DashBoard}/>
          </Switch>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
