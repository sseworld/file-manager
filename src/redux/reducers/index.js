import { combineReducers } from "redux"
import authReducer from "./authReducers";
import fileFolderReducer from "./fileFolderReduces";

const rootReducer = combineReducers({
  auth: authReducer,
  filefolders: fileFolderReducer,
});

export default rootReducer