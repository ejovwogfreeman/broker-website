import React from "react";
import "../css/Modal.css";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Withdraw from "../pages/Deposit";

const Modalbtcdeposit = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);
  const params = useParams();

  const [depositDetails, setDepositDetails] = React.useState({
    method: params.method ? params.method : "btc",
    amount: null,
  });

  return (
    <div className="modal-container">
      <Link to="/deposit" className="nav-icon">
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="modal-box deposit">
        <h2>Deposit Using {depositDetails.method}</h2>
        <div>
          <h3>Wallet Address</h3>
          <p>
            {depositDetails.method === "btc" && <>abcdqwertyuiop</>}
            {depositDetails.method === "tether" && <>asdfjklmkljdhlklsghi</>}
            {depositDetails.method === "etherium" && <>nklnlkajkdjopejpoje</>}
            {depositDetails.method === "luno" && <>jkljakljkldgklsklsl</>}
          </p>
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
      </div>
    </div>
  );
};

export default Modalbtcdeposit;
