import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
// import { Link } from 'react-router-dom'
import Navbar2 from "../components/Navbar2";
import { Helmet } from "react-helmet";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";

const Transaction = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Withdraw History</title>
      </Helmet>
      <Navbar2 />
      <div className="general-container2">
        <Background text="TRANSACTION LOG" />
        <div className="body">
          <div className="content">
            <div className="account-stats scroll-x">
              <h3>TRANSACTION LOG</h3>
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
                  {/* NB: only completed transaction will come to this page */}
                  <thead>
                    <td>#&nbsp;ID</td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Date
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Transaction ID
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Type
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Amount
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Post Balance
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Details
                    </td>
                  </thead>
                </table>
                <small className="division">No data available in table</small>
                <br />
                <div className="form">
                  <small>showing 0 of 0 entries</small>
                  <div>
                    <BsArrowLeftCircleFill />
                    &nbsp;&nbsp;
                    <BsArrowRightCircleFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
