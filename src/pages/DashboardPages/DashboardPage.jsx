import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import { getFiles, getFolders } from "../../redux/actionCreators/fileFolderActionCreator";
import FolderComponents from "../../components/DashboardComponents/FolderComponents/FolderComponents";
import CreateFile from "../../components/DashboardComponents/CreateFile/CreateFile";

const DashboardPage = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
  const [isCreateFileModelOpen, setIsCreateFileModelOpen] = useState(false);
  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if(isLoading && userId){
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [isLoading, userId, dispatch]);

  return (
    <>
      {isCreateFolderModelOpen && (
        <CreateFolder setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      )}
      {isCreateFileModelOpen && (
        <CreateFile setIsCreateFileModelOpen={setIsCreateFileModelOpen} />
      )}
      <Navbar />
      <SubBar setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} setIsCreateFileModelOpen={setIsCreateFileModelOpen} />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponents />} />
      </Routes>
    </>
  );
};

export default DashboardPage;
