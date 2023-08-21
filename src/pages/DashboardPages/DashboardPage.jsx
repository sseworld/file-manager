import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/DashboardComponents/Navbar/Navbar"
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';

const DashboardPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate("/")
    }
  }, [])

  return (
    <>
      <Navbar />
      <SubBar />
      <HomeComponent />
    </>
  )
}

export default DashboardPage
