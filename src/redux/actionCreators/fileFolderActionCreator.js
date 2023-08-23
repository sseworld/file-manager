import * as types from "../actionTypes/fileFolderActionTypes";
import fire from "../../config/firebase"

//Action
const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload
})

export const createFolder = (data) => (dispatch) => {
    fire.firestore().collection("folders").add(data).then(async (folder) => {
        const folderData = await (await folder.get()).data();
        dispatch(addFolder(folderData))
        alert("Folder Created Successfully")
    })
}