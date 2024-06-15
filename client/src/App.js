import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Marketplace from './pages/Marketplace';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
