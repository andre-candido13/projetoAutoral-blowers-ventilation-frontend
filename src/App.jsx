import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import { UserProvider } from './context/UserContext.jsx';
import SignUp from './pages/SIgn-up.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <UserProvider>
 
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp/>}/>

        </Routes>
   
      </UserProvider>
    </BrowserRouter>
  );
}


