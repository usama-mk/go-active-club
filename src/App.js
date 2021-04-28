import './App.css';
import Map from './Components/Map/Map';
import AllOffers from './Pages/AllOffers/AllOffers';
import IndividualOffer from './Pages/IndividualOffer/IndividualOffer';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       {/* <AllOffers/> */}
       <IndividualOffer/>
       {/* <Map/> */}
    </div>
  );
}

export default App;
