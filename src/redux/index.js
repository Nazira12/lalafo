import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {authSliceReducer} from "./../redux/slice";
import { housesSliceReducer } from "./housesSlice";

const reducers = combineReducers({
    auth: authSliceReducer,
    houses: housesSliceReducer
})

export const store = configureStore({
reducer: reducers
})

store.subscribe(() => {
    const auth = store.getState().auth
    localStorage.setItem("auth", JSON.stringify(auth))
})

console.log(store)

