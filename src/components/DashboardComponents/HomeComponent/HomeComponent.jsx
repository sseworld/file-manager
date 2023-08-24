import React from "react";
import ShowItems from "../ShowItems/ShowItems";
import { shallowEqual, useSelector } from "react-redux";

const HomeComponent = () => {
  const folders = ["New Folder", "new folder 2"];
  const files = ["New file", "new file 2"];

  const { isLoading, userFolder } = useSelector(
    (state) => ({
      isLoading: state.filefolders.isLoading,
      userFolder: state.filefolders.userFolders,
    }),
    shallowEqual
  );

  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center">Loading...</h1>
      ) : (
        <>
          <ShowItems title={"Created Folder"} type={"folder"} items={userFolder} />
          <ShowItems title={"Created Files"} type={"file"} items={files} />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
