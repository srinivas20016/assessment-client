import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
// import "./header.css";

const Header = (props) => {
    const { user, loggedIn } = props
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <Link to="/" className="navbar-brand">Home</Link>
              </div>
              <ul className="nav navbar-nav">
                  {loggedIn && user.role === "auditor" &&
                    <li><Link to="/all-users">USERS</Link></li>
                  }
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link className="nav-link" to="/login">
                        <span className={`glyphicon ${loggedIn ? "glyphicon-log-out" : "glyphicon-log-in"}`}  />
                        {user ? " LOGOUT" : " LOGIN" }
                    </Link>
                  </li>
              </ul>
          </div>
      </nav>
  );
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  const { user, loggedIn } = authentication;
  return { user, loggedIn };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
