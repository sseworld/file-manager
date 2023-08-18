import * as types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase"

const loginUser = (payload) => {
    return{
        type: types.LOGIN_USER,
        payload
    }
}

// const registerUser = (payload) => {
//     return{
//         type: types.Register_USER,
//         payload
//     }
// }

const logoutUser = () => {
    return {
        type: types.SIGN_OUT_USER,
    }
}

//action Creator
export const signInUser = (email, password) => (dispatch) => {
    fire.auth().signInWithEmailAndPassword(email, password).then(user => {
        console.log(user)
    }).catch((error) => {
        alert("Invalid Email OR Password")
    })
}

export const signUpUser = (name, email, password) => (dispatch) => {
    console.log(name, email, password)
}

export const signOutUser = () => (dispatch) => {
    dispatch(logoutUser())
}