import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faFileUpload,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator";

const SubBar = ({ setIsCreateFolderModelOpen, setIsCreateFileModelOpen, setIsUploadFileModelOpen }) => {
  const mobileView = window.innerWidth < 768;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFolder, currentFolderData, userFolders } = useSelector(
    (state) => ({
      currentFolder: state.filefolders.currentFolder,
      userFolders: state.filefolders.userFolders,
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === state.filefolders.currentFolder
      ),
    }),
    shallowEqual
  );

  const handleResize = () => {
    setShow(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (link, id) => {
    navigate(link);
    dispatch(changeFolder(id));
  };

  return (
    <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5">
      <nav className="ms-2" aria-label="breadcrumb">
        <ol className="breadcrumb d-flex align-items-center">
          {currentFolder !== "root" ? (
            <>
              <button
                onClick={() => handleNavigate("/dashboard", "root")}
                className="breadcrumb-item btn btn-link text-decoration-none"
              >
                Root
              </button>
              {currentFolderData?.data.path.map((folder, index) => (
                <button
                  key={index}
                  className="breadcrumb-item btn btn-link text-decoration-none"
                  onClick={() =>
                    handleNavigate(
                      `/dashboard/folder/${
                        userFolders.find((fldr) => folder === fldr.docId).docId
                      }`,
                      userFolders.find((fldr) => folder === fldr.docId).docId
                    )
                  }
                >
                  {userFolders.find((fldr) => folder === fldr.docId).data.name}
                </button>
              ))}
              <li className="breadcrumb-item active ">
                {currentFolderData?.data.name}
              </li>
            </>
          ) : (
            <>
              <li className="breadcrumb-item active">Root</li>
            </>
          )}
        </ol>
      </nav>

      <ul className="navbar-nav ms-auto flex-row" /* style={{ flexDirection: "row" }} */ >
        <li className="nav-item">
          <button className="btn btn-outline-dark mx-2 me-2" onClick={() =>setIsUploadFileModelOpen(true)}>
            <FontAwesomeIcon icon={faFileUpload} />{" "}
            {!show && <>&nbsp;Upload Files</>}
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => setIsCreateFileModelOpen(true)}
          >
            <FontAwesomeIcon icon={faFileAlt} />{" "}
            {!show ? <>&nbsp;Create Files</> : ""}
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => setIsCreateFolderModelOpen(true)}
          >
            <FontAwesomeIcon icon={faFolderPlus} />{" "}
            {!show ? <>&nbsp;Create Folder</> : ""}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;
