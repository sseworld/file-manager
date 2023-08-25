import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";

const FolderComponents = () => {
  const { folderId } = useParams();
  const { currentFolderData, childFolders } = useSelector(
    (state) => ({
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      ),
    }),
    shallowEqual
  );
  return (
    <div>
      {childFolders.length > 0 ? (
        <>
          <ShowItems
            title={"Created Folder"}
            type={"folder"}
            items={childFolders}
          />
        </>
      ) : (
        <p className="text-center my-5">Empty Folder</p>
      )}
    </div>
  );
};

export default FolderComponents;
