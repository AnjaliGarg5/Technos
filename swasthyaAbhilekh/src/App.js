import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DoctorDashboard from './Components/DoctorDashboard';
import Home from './Components/home';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      < Navigation/>
      <Routes>
        <Route exact path='/'  element={ <here/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/DoctorDashboard' element={ <DoctorDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
