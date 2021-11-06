// import './App.css';
import {
  BrowserRouter as Router, Route, Link, useParams,
  Switch
} from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
// import Readmore from './Components/Readmore/Readmore';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import AddEvent from './Components/AddEvents/AddEvent';
import Events from './Components/AllEvents/Events';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import Readmore from './Components/Readmore/Readmore';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* <Route path="/Services">
              <Services></Services>
            </Route> */}
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/events">
              <Navbar></Navbar>
              <Events></Events>
              <Footer></Footer>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/addEvents">
              <AddEvent></AddEvent>
            </PrivateRoute>
            {/* <Route exact path="/allEvents">
              <Events></Events>
            </Route> */}
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/events/:id">
              <Readmore></Readmore>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
