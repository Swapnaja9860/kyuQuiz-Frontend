import {QUIZNAME} from '../../actions/types'

const initialstate = {
    quiz_name : ''
}
function QuiznameReducer(state = initialstate, action)
{
    switch (action.type) {
        case QUIZNAME:
            console.log('quizzz'+action.payload);
            return{
            ...state,
            quiz_name : action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default QuiznameReducer;