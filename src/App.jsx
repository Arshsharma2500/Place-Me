import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/nav.jsx';
import Home from './Components/Home/Home.jsx';
import MyProfile from './Components/Myprofile/Myprofile.jsx';
import Company from './Components/Company/Company.jsx';
import Feedback from './Components/Feedback/Feedback.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/"
            element={
              <div className="Home">
                <Nav />
                <Home />
              </div>
            }
          />

          <Route
            path="/myprofile"
            element={
              <div className='prof'>
                <Nav />
                <MyProfile />
              </div>
            }
          />

          <Route
          path='/company'
          element={
            <div className='company'>
              <Nav />
              <Company />
            </div>
          }/>

          <Route
          path='/feedback'
          element={
            <div className='feedback'>
              <Nav />
              <Feedback />
            </div>
          }/>

          <Route
            path="*"
            element={
              <div>
                <p>kya bhai i am confused to route</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
