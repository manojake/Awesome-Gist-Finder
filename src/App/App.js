import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DisplayGist from "../DisplayGist/DisplayGist";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DisplayGist}></Route>
      </Switch>
    </Router>
  );
}

export default App;
