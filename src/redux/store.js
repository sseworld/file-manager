import { applyMiddleware, combineReducers, configureStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

export default store = configureStore(
    combineReducers({})
    ,
    composeWithDevTools(applyMiddleware(thunk))
)