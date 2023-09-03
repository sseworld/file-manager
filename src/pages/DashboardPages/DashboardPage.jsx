import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import {
  getFiles,
  getFolders,
} from "../../redux/actionCreators/fileFolderActionCreator";
import FolderComponents from "../../components/DashboardComponents/FolderComponents/FolderComponents";
import CreateFile from "../../components/DashboardComponents/CreateFile/CreateFile";
import FileComponent from "../../components/DashboardComponents/FIleComponent/FileComponent";
import UploadFIle from "../../components/DashboardComponents/UploadFIle/UploadFIle";

const DashboardPage = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
  const [isCreateFileModelOpen, setIsCreateFileModelOpen] = useState(false);
  const [isUploadFileModelOpen, setIsUploadFileModelOpen] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);
  const { pathname } = useLocation();

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

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [isLoading, userId, dispatch]);

  useEffect(() => {
    if (pathname.includes("/file/")) {
      setShowSubBar(false);
    } else {
      setShowSubBar(true);
    }
  }, [pathname]);

  return (
    <>
      {isCreateFolderModelOpen && (
        <CreateFolder setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      )}
      {isCreateFileModelOpen && (
        <CreateFile setIsCreateFileModelOpen={setIsCreateFileModelOpen} />
      )}
      {isUploadFileModelOpen && (
        <UploadFIle setIsUploadFileModelOpen={setIsUploadFileModelOpen} />
      )}
      <Navbar />
      {showSubBar && (
        <SubBar
          setIsCreateFolderModelOpen={setIsCreateFolderModelOpen}
          setIsUploadFileModelOpen={setIsUploadFileModelOpen}
          setIsCreateFileModelOpen={setIsCreateFileModelOpen}
        />
      )}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponents />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>
    </>
  );
};

export default DashboardPage;
