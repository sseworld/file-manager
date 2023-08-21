import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const SubBar = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5">
      {/* <nav className="ms-5" aria-label="breadcrumb">
            <ol className="breadcrumb d-flex align-items-center">
                <button className="breadcrumb-item btn btn-link text-decoration-none">Root</button>
            </ol>
        </nav> */}
      <p>Root</p>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <button className="btn btn-outline-dark mx-2">
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload Files
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-dark mx-2">
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create Files
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-dark mx-2">
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;
