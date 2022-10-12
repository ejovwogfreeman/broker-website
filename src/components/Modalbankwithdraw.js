import React, { useEffect } from "react";
import "../css/Modal.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { makeWithdrawal, getUser } from "../data";

const Modalbankwithdraw = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = React.useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const [withdrawDetails, setWithdrawDetails] = React.useState({
    method: params.method ? params.method : "Bank Transfer",
    amount: null,
    address: null,
  });

  const handleSubmit = async () => {
    setLoading(true);

    let Withdrawal = await makeWithdrawal(UserState.token, withdrawDetails);

    if (Withdrawal.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: Withdrawal.message,
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: Withdrawal.message,
      variant: "success",
      open: true,
    });

    setLoading(false);
    setWithdrawDetails({ ...withdrawDetails, amount: null });
    navigate("/dashboard", { state: "reload" });
  };

  useEffect(() => {
    if (params.method) {
      setWithdrawDetails({ ...withdrawDetails, method: params.method });
    }
  }, [params]);

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
            <input
              type="number"
              placeholder="Withdrawal Amount"
              value={withdrawDetails.amount}
              required
              onChange={(e) =>
                setWithdrawDetails({
                  ...withdrawDetails,
                  amount: e.target.value,
                })
              }
            />
          </div>
          <br />
          <select
            onChange={(e) => {
              navigate(`/withdraw/${e.target.value}`);
            }}
            value={params.method ? params.method : "Bank Transfer"}
          >
            <option value={"Bank Transfer"}>Bank Transfer</option>
            <option value={"Bitcoin"}>Bitcoin</option>
            <option value={"Luno"}>Luno</option>
            <option value={"Tether"}>Tether</option>
          </select>
          <br /> <br />
          <h3>
            {withdrawDetails.method === "Bank"
              ? "Account Number"
              : "Wallet Address"}
          </h3>
          <div>
            <input
              type="text"
              required
              value={withdrawDetails.address}
              placeholder={
                withdrawDetails.method === "Bank"
                  ? "Account Number"
                  : "Wallet Address"
              }
              onChange={(e) =>
                setWithdrawDetails({
                  ...withdrawDetails,
                  address: e.target.value,
                })
              }
            />
          </div>
          <br />
          <button onClick={handleSubmit} disabled={loading}>
            <FaTelegramPlane /> {loading ? "LOADING..." : "WITHDRAW"}
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
