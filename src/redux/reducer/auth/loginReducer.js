import { LOGIN, LOGOUT } from "../../actions/types";

const initial ={
    loggedIn : false,
    cred : {}
}

function LoginReducer(state=initial,action)
{
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                loggedIn : true,
               cred : action.payload
            }
            break;
        case LOGOUT:
            return{
                 ...state,
                loggedIn : false,
                cred : {}
            }
            break;
        default:
            return state;
            break;
    }
}

export default LoginReducer;