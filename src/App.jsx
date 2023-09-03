import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Login, Register, HomePage, DashboardPage } from "./pages"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators';

function App() {
  const { isLoggedIn } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
    }),
    shallowEqual
  );
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
        <Route path='/dashboard/*' element={isLoggedIn ? (<DashboardPage />) : (<Login />)} />
        {/* <Route path='*' element={< />} />  */}
      </Routes>
    </div>
  )
}

export default App
