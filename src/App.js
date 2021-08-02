import React from "react";
import Login from './views/Login';
import Taxes from './views/Taxes';
import Form from './views/Form';
import Submissions from './views/Submissions';
import SubmissionEditor from './views/SubmissionEditor';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/taxes">
            <Taxes />
          </Route>
          <Route exact path={'/taxes/:id/form'}>
            <Form />
          </Route>
          <Route exact path={'/taxes/:id/submissions'}>
            <Submissions />
          </Route>
          <Route exact path={'/taxes/:id/submissions/edit'}>
            <SubmissionEditor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
