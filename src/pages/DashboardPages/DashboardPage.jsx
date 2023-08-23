import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/DashboardComponents/Navbar/Navbar"
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';

const DashboardPage = () => {
  const [ isCreateFolderModelOpen, setIsCreateFolderModelOpen ] = useState(false)
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate("/")
    }
  }, [])

  return (
    <>
    {
      isCreateFolderModelOpen && (
        <CreateFolder setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      )
    }
      <Navbar />
      <SubBar setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      <HomeComponent />
    </>
  )
}

export default DashboardPage
