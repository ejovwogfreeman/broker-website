import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop'
import Payment from './components/Payment'
import Footer from './components/Footer'

import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Passwordreset from './pages/Passwordreset';
import Dashboard from './pages/Dashboard';
import Investment from './pages/Investment';
import Deposit from './pages/Deposit';
import DepositHistory from './pages/DepositHistory';
import Withdraw from './pages/Withdraw';
import WithdrawHistory from './pages/WithdrawHistory';
import Transaction from './pages/Transaction';
import Editprofile from './pages/Editprofile';
import Passwordchange from './pages/Passwordchange';
import Support from './pages/Support';

function App() {

  const [show, setShow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      (() => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 500) {
          setShow(10);
        } else {
          setShow(-100);
        }
      })
    );
  }, []);

    const [isLoading, setIsloading]=useState(true);

    useEffect(()=> {
      setTimeout(()=> {
        setIsloading(false)
      }, 3000)
    })

    if(isLoading){
      return <Loader/>
    }

    return (
      <div className="App">
        <Router>
          <ScrollToTop/>          
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            /> 
            <Route
              exact
              path="/about"
              element={<About/>}
            /> 
            <Route
              exact
              path="/faqs"
              element={<Faq/>}
            /> 
            <Route
              exact
              path="/Contact"
              element={<Contact/>}
            /> 
            <Route
              exact
              path="/login"
              element={<Signin/>}
            /> 
            <Route
              exact
              path="/register"
              element={<Signup/>}
            /> 
            <Route
              exact
              path="/reset-password"
              element={<Passwordreset/>}
            /> 
            <Route
              exact
              path="/dashboard"
              element={<Dashboard/>}
            /> 
            <Route
              exact
              path="/investment"
              element={<Investment/>}
            /> 
            <Route
              exact
              path="/deposit"
              element={<Deposit/>}
            /> 
            <Route
              exact
              path="/deposit-history"
              element={<DepositHistory/>}
            /> 
            <Route
              exact
              path="/withdraw"
              element={<Withdraw/>}
            /> 
            <Route
              exact
              path="/withdraw-history"
              element={<WithdrawHistory/>}
            /> 
            <Route
              exact
              path="/transaction"
              element={<Transaction/>}
            /> 
            <Route
              exact
              path="/edit-profile"
              element={<Editprofile/>}
            /> 
            <Route
              exact
              path="/change-password"
              element={<Passwordchange/>}
            /> 
            <Route
              exact
              path="/support"
              element={<Support/>}
            /> 
            <Route
              exact
              path="*"
              element={<Notfound/>}
            /> 
          </Routes>
          <Payment/>
          <Footer/>

          <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              position: "fixed",
              bottom: show,
              right: 20,
              transition: "all 1s",
            },
          }}
        >
          <Fab size="medium" color="#2351DC;" aria-label="top" onClick={goUp}>
            <KeyboardArrowUpRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Box>
        </Router>      
      </div>
  );
}

export default App;
