import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Modalinveststarter = () => {
  return (
    <div className="modal-container">
      <div className="modal-box deposit" style={{ overflowY: "scroll" }}>
        <h2>Investment On Starter Plan</h2>
        <div>
          <h3>Your Balance</h3>
          <p>$20000</p>
        </div>
        <form>
          <h3>Investment Range</h3>
          <p>300.00 USD - 75000.00 USD</p>
          <div>
            <h3>Amount To Invest</h3>
            <input type="number" placeholder="Amount To Invest" required />
          </div>
          <br />
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: "5px",
              width: "90%",
              margin: "auto",
              padding: "0",
            }}
          >
            <h5
              style={{
                background: "rgb(8, 5, 34)",
                color: "rgb(35, 201, 216)",
                margin: "0px",
                padding: "10px",
              }}
            >
              Your Investment Details
            </h5>
            <p
              style={{
                padding: "5px",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Comission - 150%
            </p>
            <p
              style={{
                padding: "5px",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Copound Weekly - 200
            </p>
            <p
              style={{
                padding: "5px",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Term Monthly - 300
            </p>
          </div>
          <br />
          <button>
            {" "}
            <FaTelegramPlane /> Invest
          </button>
        </form>
        <br />
        <Link to="/investment-package" style={{ marginTop: "0px" }}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Modalinveststarter;
