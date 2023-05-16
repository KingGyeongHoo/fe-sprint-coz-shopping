import { createStore, combineReducers } from "redux";
import itemReducer from "./itemReducer";
import bookmarkReducer from "./bookmarkReducer";

const rootReducer = combineReducers({
    item : itemReducer,
    bookmark : bookmarkReducer
})

const store = createStore(rootReducer);

export default store;