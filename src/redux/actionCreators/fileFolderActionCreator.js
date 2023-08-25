import * as types from "../actionTypes/fileFolderActionTypes";
import fire from "../../config/firebase";

//Action
const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});

const addFolders = (payload) => ({
  type: types.ADD_FOLDER,
  payload,
});

const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});

// Action Creators
export const createFolder = (data) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .add(data)
    .then(async (folder) => {
      const folderData = await (await folder.get()).data();
      const folderId = folder.id;
      dispatch(addFolder({ data: folderData, docId: folderId }));
      alert("Folder Created Successfully");
    });
};

export const getFolders = (userId) => (dispatch) => {
  dispatch(setLoading(true));
  fire
    .firestore()
    .collection("folders")
    .where("userId", "==", userId)
    .get()
    .then(async (folders) => {
      const foldersData = await folders.docs.map((folder) => ({
        data: folder.data(),
        docId: folder.id,
      }));
      dispatch(setLoading(false));
      dispatch(addFolders(foldersData));
    });
};
