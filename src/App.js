import logo from './logo.svg';
import './App.css';
// import Login from './components/classcomponents/LoginComponent';
import TestComp from './components/functionalcomponents/testcomponent';
import PropsComponent from './components/functionalcomponents/PropsComponent';
import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/functionalcomponents/About";
import Experience from "./components/functionalcomponents/experience";
import Login from "./components/functionalcomponents/Login";
import Home from "./components/functionalcomponents/Home";
import Footer from "./components/functionalcomponents/Footer";
import NewUser from './components/functionalcomponents/NewUser';
function App() {
  return (
    <div className="App">
      {/* <PropsComponent name="KEC" course="PNR" /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/NewUser" element={<NewUser />}></Route>
        </Routes>
      </BrowserRouter>

      {/*<header className="App-header">}
        {/* <StateComponent /> */}
      {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
