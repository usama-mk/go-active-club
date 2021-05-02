import './App.css';
import Map from './Components/Map/Map';
import AllOffers from './Pages/AllOffers/AllOffers';
import Bookings from './Pages/BookingsPage/Bookings';
import Checkout from './Pages/Checkout/Checkout';
import IndividualOffer from './Pages/IndividualOffer/IndividualOffer';
import IndividualParticipant from './Pages/IndividualParticipant/IndividualParticipant';
import InfoOnCamp from './Pages/InfoOnCamp/InfoOnCamp';
import Login from './Pages/Login/Login';
import Participants from './Pages/Participants/Participants';
import User from './Pages/User/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/user" exact component={User} />
          <Route path="/all-offers" exact component={AllOffers} />
          <Route path="/info-oncamp" exact component={InfoOnCamp} />
          <Route path="/individual-offer" exact component={IndividualOffer} />
          <Route path="/participants" exact component={Participants} />
          <Route path="/individual-participant" exact component={IndividualParticipant} />
          <Route path="/bookings" exact component={Bookings} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
