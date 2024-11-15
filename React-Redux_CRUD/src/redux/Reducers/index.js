import { combineReducers } from "redux";
import crudReducer from "./crudReducers";

const mainReducers = combineReducers({
    crudReducer
})

export default mainReducers