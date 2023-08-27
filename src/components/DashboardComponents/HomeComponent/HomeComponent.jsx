import React from "react";
import ShowItems from "../ShowItems/ShowItems";
import { shallowEqual, useSelector } from "react-redux";

const HomeComponent = () => {
  const { isLoading, userFolder, userFiles } = useSelector(
    (state) => ({
      isLoading: state.filefolders.isLoading,
      userFolder: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === "root"
      ),
      userFiles: state.filefolders.userFiles.filter(
        (file) => file.data.parent === "root"
      ),
    }),
    shallowEqual
  );

  const createdFiles = userFiles && userFiles.filter((file) => file.data.url === null );
  const uploadedFiles = userFiles && userFiles.filter((file) => file.data.data === null );

  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center">Loading...</h1>
      ) : (
        <>
          <ShowItems
            title={"Created Folder"}
            type={"folder"}
            items={userFolder}
          />
          <ShowItems
            title={"Created Files"}
            type={"file"}
            items={createdFiles}
          />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
