import { configureStore} from '@reduxjs/toolkit'
import reducers from '.'
import thunk from "redux-thunk"
import applyMiddleware from 'apply-middleware';
import reducer from './bankReducer';



export const store = configureStore({
    reducer :{
        reducer : reducers,

    }
    
})

applyMiddleware(thunk);




