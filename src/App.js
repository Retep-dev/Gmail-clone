import React, { useEffect }  from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import {BrowserRouter as Router, Routes, Links, Route,} from 'react-router-dom';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMesssageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {
  const sendMesssageIsOpen = useSelector(selectSendMesssageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router> 
      {!user ? (
        <Login />
      ):(
        <div className="app">
      <Header />

      <div className="app__body"> 
      
      <Sidebar />

      <Routes>
      <Route path="/Mail" element={<Mail />} />
      <Route exact path="/" element={<EmailList />} />
      </Routes>
      </div>
      {sendMesssageIsOpen && <SendMail />}
      </div>
)}   
    </Router>
  );
}

export default App;
 