import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contacts from './Contacts';
import reportWebVitals from './reportWebVitals';
import RegForm from './Forms/RegForm';
import LoginForm from './Forms/LoginForm';
import ClientProfile from './Forms/ClientProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
        <Routes>
            <Route path='/' element={<RegForm />} />
            <Route path='/loginForm' element={<LoginForm />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path="/client/:clientId" element={<ClientProfile />} />

        </Routes>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





   