import { createStore } from "redux";
import mainReducers from "./Reducers";

const store = createStore(mainReducers);

export default store;