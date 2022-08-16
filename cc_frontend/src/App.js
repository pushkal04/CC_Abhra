import './App.css';
import LandingPage from './Pages/LandingPage';
import T1 from './Pages/T1';
import T2 from './Pages/T2';

function App() {
  return (
    <div className="" style={{"position" : "fixed", "top" : "40%", "left" : "50%", "transform" : "translate(-50%, -50%)"}}>  
      {/* <LandingPage/> */}
      {/* <T1/> */}
      <T2/>
    </div>
  );
}

export default App;
