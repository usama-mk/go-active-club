import './App.css';
import Map from './Components/Map/Map';
import AllOffers from './Pages/AllOffers/AllOffers';
import IndividualOffer from './Pages/IndividualOffer/IndividualOffer';
import IndividualParticipant from './Pages/IndividualParticipant/IndividualParticipant';
import InfoOnCamp from './Pages/InfoOnCamp/InfoOnCamp';
import Login from './Pages/Login/Login';
import Participants from './Pages/Participants/Participants';
import User from './Pages/User/User';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       {/* <AllOffers/> */}
       {/* <IndividualOffer/> */}
       {/* <InfoOnCamp/> */}
       {/* <Participants/> */}
       {/* <IndividualParticipant/> */}
       <User/>
      
    </div>
  );
}

export default App;
