import React from "react";
import { useParams } from "react-router-dom";

const FolderComponents = () => {
  const { folderId } = useParams();
  return <div>FolderComponent : {folderId}</div>;
};

export default FolderComponents;
