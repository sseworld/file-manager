const initialState = {}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        // case 'LOGIN': 
        // return {
        //     ...state,
        //     isAuthenticated: true,
        //     user: action.payload
        // }
        // case 'LOGOUT': 
        // return {
        //     ...state,
        //     isAuthenticated: false,
        //     user: {}
        // }
        default:
        return state
    }
}

export default authReducer