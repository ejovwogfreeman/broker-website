import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
// import { Link } from 'react-router-dom'
import Navbar2 from "../components/Navbar2";
import { Helmet } from "react-helmet";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";

const InvestmentHistory = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Investment History</title>
      </Helmet>
      <Navbar2 />
      <div className="general-container2">
        <Background text="INVESTMENT HISTORY" />
        <div className="body">
          <div className="content">
            <div className="account-stats scroll-x">
              <h3>INVESTMENT HISTORY</h3>
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
                    <td>#&nbsp;S/N</td>
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
                      &nbsp;Withdrawal Method
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Investment Plan
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Amount Invested
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Comission
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Compound Weekly
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Term Monthly
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

export default InvestmentHistory;
