import { createStore, combineReducers } from "redux";
import inputReducer from "./reducers/inputReducer.js";
import mainReducer from "./reducers/mainReducer.js";
import "./store.css";

const store = createStore(
  combineReducers({
    input: inputReducer,
    main: mainReducer,
  })
);
export default store;
