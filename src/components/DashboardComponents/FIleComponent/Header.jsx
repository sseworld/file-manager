import { faArrowLeftLong, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ fileName, fileData, prevFileData }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg mt-1 navbar-light bg-white shadow-sm">
      <p className="navbar-brand fw-bold ms-5">{fileName}</p>
      {
        fileData !== prevFileData && (
          <h5 className="my-0 fw-bold ms-2 text-danger">*[modified]</h5>
        )
      }
      <ul className="navbar-nav ms-auto me-5 my-0">
        <li className="nav-item">
          <button className="btn btn-success" disabled={fileData === prevFileData}>
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-dark"onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Go Back
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
