/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import InvalidURL from './components/InvalidURL';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';
import Header from './components/navbar/Header';
import useLocalAuthCheck from './hook/useLocalAuthCheck';
import Home from './pages/Home';

function App() {
  const authChecked = useLocalAuthCheck();
  return (!authChecked) ? (<div>Checking Authentication...</div>) : (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/signup" element={<PublicRoute><SignUpForm /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LogInForm /></PublicRoute>} />
        <Route path="*" element={<InvalidURL />} />
      </Routes>
    </Router>
  );
}

export default App;
