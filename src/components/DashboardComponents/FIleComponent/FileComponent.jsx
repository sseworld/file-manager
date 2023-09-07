import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";
import { getFilesFile } from "../../../redux/actionCreators/fileFolderActionCreator";

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState("");
  const [prevFileData, setPrevFileData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const currentFile = useSelector((state) => ({
  //   currentFile: state.filefolders.userFiles,
  // }), shallowEqual);

  // if(currentFile.length === null) {
  //   // dispatch(get)
  // }

  const { currentFile, isAuthenticated, userId } = useSelector(
    (state) => ({
      currentFile: state.filefolders.userFiles.find(
        (file) => file.docId === fileId
      ),
      isAuthenticated: state.auth.isAuthenticated,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );


  const downloadFile = () => {
    const element = document.createElement("a");
    element.setAttribute("href", currentFile?.data?.url);
    element.setAttribute("download", currentFile?.data?.name);
    element.setAttribute("target", "_blank");
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (currentFile) {
      setFileData(currentFile?.data?.data);
      setPrevFileData(currentFile.data.data);
    }
  }, [currentFile, currentFile?.data?.data]);

  return (
    <div>
      {isAuthenticated && currentFile.data.data !== null ? (
        <>
          <Header
            fileId={fileId}
            fileName={currentFile?.data?.name}
            fileData={fileData}
            prevFileData={prevFileData}
          />
          <CodeEditor
            fileName={currentFile?.data?.name}
            data={fileData}
            setData={setFileData}
          />
        </>
      ) : (
        <div className="position-fixed left-0 top-0 w-100 h-100 bg-black text-white">
          {/* sub menu bar   */}
          <div className="d-flex py-4 mt-4 px-5 justify-content-between align-items-center">
            <p title={currentFile?.data?.name} className="my-0">
              {currentFile?.data?.name.length > 40
                ? currentFile?.data?.name.slice(0, 40) +
                  "... ." +
                  currentFile?.data?.extension
                : currentFile?.data?.name}
            </p>
            <div className="d-flex align-items-center me-5">
              <button
                className="btn btn-sm btn-outline-light me-2"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => downloadFile()}
              >
                Download
              </button>
              {/* <a href={currentFile?.data?.url} className="btn btn-sm btn-primary" download={true}>Download</a> */}
            </div>
          </div>
          <div className="w-100 mt-4" style={{ height: "650px" }}>
            {currentFile?.data?.extension.includes("png") ||
            currentFile?.data?.extension.includes("jpg") ||
            currentFile?.data?.extension.includes("jpeg") ||
            currentFile?.data?.extension.includes("svg") ||
            currentFile?.data?.extension.includes("gif") ? (
              <img
                src={currentFile?.data?.url}
                alt={currentFile?.data?.name}
                className="w-100 h-100 img-fluid"
              />
            ) : (
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <p className="text-center">
                  File type not supported. Please download the file to view it.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileComponent;
