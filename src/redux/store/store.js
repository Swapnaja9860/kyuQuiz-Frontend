import { createStore,applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootreducer';

const initialState = [];
const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)),
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),


    
    );

export default store;

//thunk  middleware allows us to call the dispatch fun directly to make async request