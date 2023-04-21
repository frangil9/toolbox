import React, { useEffect } from "react";
import "./App.css";
import { Router, Switch } from "react-router-dom";
import { saveState } from "./redux/store/store";
import { PrivateRouter } from "./router/privateRouter";
import { HomeRouter } from "./router/homeRouter";
import { history } from "./history";

const App = () => {

  useEffect(() => {
    window.addEventListener("unload", saveState);
  }, []);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRouter path="/" component={HomeRouter} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
