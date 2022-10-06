import React from "react";
import "../css/Modal.css";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Modalbankwithdraw = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);
  const params = useParams();

  const [withdrawDetails, setWithdrawDetails] = React.useState({
    method: params.method ? params.method : "bank",
    amount: null,
    address: null,
  });

  return (
    <div className="modal-container">
      <Link to="/withdraw" className="nav-icon">
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="modal-box deposit">
        <h2>Withdraw Using {withdrawDetails.method}</h2>
        <br />
        <form>
          <h3>Withdrawal Amount</h3>
          <div>
            <input type="number" placeholder="Withdrawal Amount" required />
          </div>
          <br />
          <h3>
            {withdrawDetails.method === "bank"
              ? "Account Number"
              : "Wallet Address"}
          </h3>
          <div>
            <input
              type="text"
              required
              placeholder={
                withdrawDetails.method === "bank"
                  ? "Account Number"
                  : "Wallet Address"
              }
            />
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
      </div>
    </div>
  );
};

export default Modalbankwithdraw;
