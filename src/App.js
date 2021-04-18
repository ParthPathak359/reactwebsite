import React from 'react';
import './App.css';
import Navbar from './components/pages/Hero/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

import Signup from './components/pages/authentication/Signup'
import { AuthProvider } from './components/contexts/AuthContext';
import Profile from './components/pages/authentication/Profile';
import Login from './components/pages/authentication/Login';
import PrivateRoute from './components/pages/authentication/PrivateRoute'
import ForgotPassword from './components/pages/authentication/ForgotPassword';
import UpdateProfile from './components/pages/authentication/UpdateProfile';
import Dashboard from './components/google-drive/Dashboard';
import AttendanceLink from './components/google-drive/AttendanceLink';

const App = () => {
  return(
    <Router>
      <AuthProvider>
      
     <Navbar/>
     <Switch>
       
        <Route path='/' exact component={Home} />

        {/* Drive */}
        <PrivateRoute exact path="/user" component={Dashboard} />


        {/*Auth*/}
        <Route exact path='/signup' exact component={Signup} />
        <Route exact path='/login' exact component={Login} />
        <Route path='/forgot-password' exact component={ForgotPassword}/>


        {/* Profile */}
        <PrivateRoute path='/Profile' exact component={Profile} />
        <PrivateRoute path='/update-profile' exact component={UpdateProfile} />


        <Route exact path="/attendance" exact component={AttendanceLink}/>
      
        
     </Switch>
     <Footer />
     </AuthProvider>
     
    </Router>
    
  )
}
export default App;