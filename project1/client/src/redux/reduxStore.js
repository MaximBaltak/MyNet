import { combineReducers, createStore } from "redux";
import friendsReducer from "./fruendsReducer";
import massagesReducer from "./MassagesReducer";
import NewsReducer from "./NewsReducer";
import profileReducer from "./ProfileReducer";
import ValueRedicer from "./ValueReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    massagesPage: massagesReducer,
    friendsPage: friendsReducer,
    newsPage: NewsReducer, 
    value: ValueRedicer,
});

let store = createStore(redusers);
window.store=store;

export default store;