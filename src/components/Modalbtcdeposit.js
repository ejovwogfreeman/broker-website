import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Modalbtcdeposit = () => {
  return (
    <div className="modal-container">
      <div className="modal-box deposit" style={{ overflowY: "scroll" }}>
        <h2>Deposit using bitcoin</h2>
        <div>
          <h3>Wallet Address</h3>
          <p>qwertyui12345678</p>
        </div>
        <form>
          <h3>Amount Deposited</h3>
          <div>
            <input type="number" placeholder="Amount Deposited" required />
          </div>
          <br />
          <h3>Deposit Proof</h3>
          <div>
            <input type="file" required />
          </div>
          <br />
          <button>
            {" "}
            <FaTelegramPlane /> Submit
          </button>
        </form>
        <br />
        <div>
          <h3>How to deposit</h3>
          <p>
            You are required to make payment to the address provided above and
            fill the form as stated for your payment to be processed.
          </p>
        </div>
        <Link to="/deposit" style={{ marginTop: "0px" }}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Modalbtcdeposit;
