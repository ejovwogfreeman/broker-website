import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Loader from './components/Loader';

function App() {

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
      </div>
  );
}

export default App;
