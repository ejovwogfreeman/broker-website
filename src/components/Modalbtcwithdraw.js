import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Modalbtcwithdraw = () => {
  return (
    <div className="modal-container">
      <div className="modal-box deposit" style={{ overflowY: "scroll" }}>
        <h2>Withdraw Using Bitcoin</h2>
        <br />
        <form>
          <h3>Withdrawal Amount</h3>
          <div>
            <input type="number" placeholder="Withdrawal Amount" required />
          </div>
          <br />
          <h3>Bitcoin Address</h3>
          <div>
            <input type="text" required placeholder="Bitcoin Address" />
          </div>
          <br />
          <button>
            {" "}
            <FaTelegramPlane /> Submit
          </button>
        </form>
        <br />
        <div>
          <h3>How To Withdraw</h3>
          <p>
            You are required to fill the form as stated for your withdrawal to
            be processed and your dashboard will be updated within 24hours.
          </p>
        </div>
        <Link to="/withdraw" style={{ marginTop: "0px" }}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Modalbtcwithdraw;
