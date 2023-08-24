import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Login, Register, HomePage, DashboardPage } from "./pages"
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsLoggedIn())
  },[])
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard/*' element={<DashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
