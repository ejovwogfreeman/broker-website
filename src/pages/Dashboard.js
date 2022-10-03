import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
// import { Link } from 'react-router-dom'
import Navbar2 from "../components/Navbar2";
import { Helmet } from "react-helmet";
import { FaRecycle, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { TbArrowsDownUp } from "react-icons/tb";

const Dashboard = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);
  console.log(UserState);

  return (
    <>
      <Helmet>
        <title>FFInvestment | Dashboard</title>
      </Helmet>
      <Navbar2 />
      <div className="general-container2">
        <Background text="YOUR DASHBOARD" />
        <div className="body">
          <div className="content">
            <div className="account-stats">
              <h3>Account Statistics</h3>
              <div className="card-show">
                <div className="card">
                  <div className="card-head">
                    <FaRegMoneyBillAlt className="icon" />
                    <h5>$ {UserState.balance}</h5>
                  </div>
                  <div className="card-tail">
                    <small>Total Deposits / Current Balance</small>
                    <BsArrowRightCircleFill />
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <FaRecycle className="icon" />
                    <h5>${UserState?.withdrawal?.length}</h5>
                  </div>
                  <div className="card-tail">
                    <small>Total Withdraws</small>
                    <BsArrowRightCircleFill />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="account-stats scroll-x">
              <h3>Reference User</h3>
              <div className="card-show ref-user">
                <div className="form">
                  <div>
                    Show entries:&nbsp;
                    <select>
                      <option value="">10</option>
                      <option value="">25</option>
                      <option value="">50</option>
                      <option value="">100</option>
                    </select>
                  </div>
                  <div>
                    Search:&nbsp;
                    <input type="text" />
                  </div>
                </div>
                <br />
                <table>
                  <thead>
                    <td>#&nbsp;ID</td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Register Date
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Username
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Name
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Email
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Phone Number
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Status
                    </td>
                  </thead>
                </table>
                <small className="division">No data available in table</small>
                <br />
                <div className="form">
                  <div>
                    <small>showing 0 of 0 entries</small>
                  </div>
                  <div>
                    <BsArrowLeftCircleFill />
                    &nbsp;&nbsp;
                    <BsArrowRightCircleFill />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="account-stats">
              <h3>
                Number Of Your Referral: {UserState.referrals} <br /> Your
                Referral Link:
              </h3>
              <div className="card-show">
                <form action="">
                  <input
                    type="text"
                    value={`http://localhost:3000/register/${UserState.referralId}`}
                    disabled
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(
                        `http://localhost:3000/register/${UserState.referralId}`
                      );
                      setToastifyState({
                        ...ToastifyState,
                        message: "Link copied to clipboard",
                        variant: "success",
                        open: true,
                      });
                    }}
                  >
                    COPY TO CLIPBOARD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
