import './App.css';
import Map from './Components/Map/Map';
import AllOffers from './Pages/AllOffers/AllOffers';
import IndividualOffer from './Pages/IndividualOffer/IndividualOffer';
import InfoOnCamp from './Pages/InfoOnCamp/InfoOnCamp';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       {/* <AllOffers/> */}
       {/* <IndividualOffer/> */}
       <InfoOnCamp/>
      
    </div>
  );
}

export default App;
