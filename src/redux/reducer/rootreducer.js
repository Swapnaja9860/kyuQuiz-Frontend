import {combineReducers} from 'redux'
import LoginReducer from './auth/loginReducer'
import SignupReducer from './auth/signupReducer'
import QuizinfoReducer from './trainer/quiznameReducer'
import QuiznameReducer from './trainer/quiznameReducer'


export default combineReducers(
    {
        login : LoginReducer,
        signup : SignupReducer,
        quizname : QuiznameReducer,
        quizinfo : QuizinfoReducer
    }
)
