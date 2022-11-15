import {QUIZINFO} from '../../actions/types'

const initialstate = {
    quiz_info : ''
}
function QuizinfoReducer(state = initialstate, action)
{
    switch (action.type) {
        case QUIZINFO:
            console.log('quizzz createe');
            return{
            ...state,
            quiz_info : action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default QuizinfoReducer;