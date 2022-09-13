import './index.css';
import Slider from './components/Slider';
// import Links from './components/Links';
import Footer from './components/Footer';

function App() {
    return (
      <div className="App">
        <Slider/>
        <Footer/>
        <div style={{margin: '5000px'}}></div>
      </div>
  );
}

export default App;
