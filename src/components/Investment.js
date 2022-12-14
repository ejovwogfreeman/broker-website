import React from "react";
import { Link } from "react-router-dom";
import "../css/Investment.css";
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";

const Investment = () => {
  const [UserState] = React.useContext(UserContext);

  return (
    <div className="investment-container">
      <div className="access">
        <h2>GET ACCESS TO YOUR ACCOUNT</h2>
        <div>
          {UserState.username ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <>
              <Link to="/login">SIGN IN</Link>
              <Link to="/register">REGISTER</Link>
            </>
          )}
        </div>
      </div>
      <div className="how">
        <h2>
          <span>
            HOW{" "}
            <span style={{ color: "rgb(35, 201, 216)" }}>
              FINANCIAL FREEDOM INVESTMENT
            </span>
            WORKS <br /> <img src={logo} width="100px" />
          </span>
        </h2>
        <div className="how-grid">
          <div>
            <h3>Sign up</h3>
            <p>Sign up as a new user with your Personal details.</p>
          </div>
          <div>
            <h3>Deposit & invest</h3>
            <p>Deposit money to wallet and invest on a plan that suites you</p>
          </div>
          <div>
            <h3>Get Profits</h3>
            <p>
              Get your Profit as stated on plan, your account will credited
              automatically
            </p>
          </div>
          <div>
            <h3>Withdraw</h3>
            <p>
              You can Withdraw once trading session is completed and wait for
              processing.
            </p>
          </div>
        </div>
      </div>
      <div className="track">
        <h1>
          Fast-track <br /> your success
        </h1>
        <div>
          {UserState.username ? (
            <>
              <p>Go to your dashboard and track your earnings</p> <br />
            </>
          ) : (
            <>
              <p>Register with us to start earning more</p> <br />
            </>
          )}
          {UserState.username ? (
            <Link to="/dashboard">GO TO DASHBOARD</Link>
          ) : (
            <Link to="/register">CREATE AN ACCOUNT</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investment;
