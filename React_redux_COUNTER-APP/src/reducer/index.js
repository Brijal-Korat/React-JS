import { combineReducers } from "redux";
import Counter from "./counterReducer";

const mainReducer = combineReducers({
    cnt : Counter
})

export default mainReducer;