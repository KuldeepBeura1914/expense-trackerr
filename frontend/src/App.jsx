import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import LandingPage from './pages/Landing/LandingPage';
import Login from "./pages/Auth/Login";
import Signup from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense'
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast";
const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>    
          <Route path="/" element={<LandingPage />} />  
          <Route path='/login' exact element={<Login />}></Route>
          <Route path='/signUp' exact element={<Signup />}></Route>
          <Route path='/dashboard' exact element={<Home />}></Route>
          <Route path='/income' exact element={<Income />}></Route>
          <Route path='/expense' exact element={<Expense />}></Route>
        </Routes>
      </Router>
    </div>

    <Toaster
      toastOptions={{
        className: "",
        style: {
          fontSize: '13px'
        },
      }}
      />
    </UserProvider>
  )
}

export default App

const Root = () => {
  // Check if token exist in localstorage 
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login 
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};