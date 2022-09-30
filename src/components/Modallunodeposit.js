import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Modallunodeposit = () => {
  return (
    <div className="modal-container">
      <div className="modal-box deposit" style={{ overflowY: "scroll" }}>
        <h2>Deposit Using Luno</h2>
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
          <h3>How To Deposit</h3>
          <p>
            You are required to make payment to the address provided above and
            fill the form as stated for your deposit to be processed and your
            dashboard will be updated within 24hours.
          </p>
        </div>
        <Link to="/deposit" style={{ marginTop: "0px" }}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Modallunodeposit;
