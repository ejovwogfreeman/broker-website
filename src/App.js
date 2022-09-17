import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Loader from './components/Loader';
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

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
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            /> 
          </Routes>
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
