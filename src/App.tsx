import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import styles from './App.module.scss';
import Example from './pages/example';
import Hook from './pages/hook';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav className={styles.navBar}>
            <ul>
              <li>
                <NavLink exact activeClassName={styles.activeNav} to="/hook">
                  Hooks
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={styles.activeNav}
                  to="/component"
                >
                  Components
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName={styles.activeNav} to="/hoc">
                  HOCs
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/hook">
              <Hook />
            </Route>
            <Route exact path="/example/:exampleFile">
              <Example />
            </Route>
            <Route exact path="/component">
              User Page
            </Route>
            <Route exact path="/hoc">
              Home page
            </Route>
            <Route path="/">
              <Redirect to="/hook" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
