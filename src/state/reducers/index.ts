import { combineReducers } from '@reduxjs/toolkit'
import bankReducer from "./bankReducer"

const reducers = combineReducers({
    bank: bankReducer
})


export default reducers