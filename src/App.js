import React from 'react';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// Define a functional component
export default function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

// Render the App component into the root element
