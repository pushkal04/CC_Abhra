import './App.css';
import { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import T1 from './Pages/T1';
import T2 from './Pages/T2';
import T3 from './Pages/T3';
import { Route, Routes} from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [emailA, setEmailA] = useState('');

  const emailHandler = (emailEx) => {
    setEmailA(emailEx);
  }
  return (
    <div className="" style={{"position" : "fixed", "top" : "40%", "left" : "50%", "transform" : "translate(-50%, -50%)"}}>  
      {/* <LandingPage emailReq = {emailHandler}/> */}
      {/* <T1/> */}
      {/* <T2 email = {emailA}/> */}
      {/* <T3 email = {emailA}/> */}
      <Link to = "/">
            <a className="nav-link" href="#">
              Home
            </a>
            </Link>
      <Routes>
      <Route path="/" exact element={<LandingPage emailReq = {emailHandler} />} />
			<Route path="/T1" exact element={<T1 />} />
      <Route path="/T2" exact element={<T2 email = {emailA} />} />
      <Route path="/T3" exact element={<T3 email = {emailA}/>} />
      </Routes>
    </div>
  );
}

export default App;
