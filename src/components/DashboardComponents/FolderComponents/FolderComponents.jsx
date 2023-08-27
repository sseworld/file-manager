import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";

const FolderComponents = () => {
  const { folderId } = useParams();
  const { currentFolderData, childFolders, childFiles } = useSelector(
    (state) => ({
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      ),
      childFiles: state.filefolders.userFiles.filter(
        (files) => files.data.parent === folderId
      ),
    }),
    shallowEqual
  );

  const createdFiles = childFiles && childFiles.filter((file) => file.data.url === null );
  const uploadedFiles = childFiles && childFiles.filter((file) => file.data.data === null );
  return (
    <div>
      {childFolders.length > 0 || childFiles.length > 0 ? (
        <>
          {childFolders.length > 0 && (
            <ShowItems
              title={"Created Folder"}
              type={"folder"}
              items={childFolders}
            />
          )}
          {childFiles.length > 0 && (
            <ShowItems
              title={"Created Folder"}
              type={"file"}
              items={createdFiles}
            />
          )}
        </>
      ) : (
        <p className="text-center my-5">Empty Folder</p>
      )}
    </div>
  );
};

export default FolderComponents;
