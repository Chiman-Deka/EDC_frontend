import './App.css';
import Admin from './components/Admin/Admin';
import Adminevents from './components/Admin/Admin_events';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation
} from "react-router-dom";
import EventState from './context/events/EventState';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  // const location = useLocation();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 3500)
  }
  return (
    <>
    <EventState>
        <Router>
        <Navbar />
        <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/events" element={<Adminevents showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
    </EventState>
    </>
  );
}

export default App;
