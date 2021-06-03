import React from "react";
import Signup from "./authentication/Signup";
import Profile from "./authentication/Profile";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Google Drive clone Routs*/}
          <PrivateRoute exact path="/" component={Dashboard} />
          {/* User Routs */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-Profile" component={UpdateProfile} />

          {/* Authentication Routs */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
