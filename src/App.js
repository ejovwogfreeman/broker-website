import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Loader from './components/Loader';
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Navbar from './components/Navbar'
import Payment from './components/Payment'
import Footer from './components/Footer'

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
          <Navbar/>
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
              path="*"
              element={<Notfound/>}
            /> 
          </Routes>
          <Payment/>
          <Footer/>
        </Router>      

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
      </div>
  );
}

export default App;
