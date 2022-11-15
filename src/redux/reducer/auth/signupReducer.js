import {SIGNUP} from '../../actions/types'

const initialState = {
    registered : false,
    data :{}
};

function SignupReducer(state= initialState , action)
{
    switch (action.type) {
        case SIGNUP:
            console.log("dgdgd");
            return{
                ...state,
                data : action.payload,
                registered: true
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default SignupReducer;