import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {authSliceReducer} from "./../redux/slice";

const reducers = combineReducers({
    auth: authSliceReducer,
    // houses: housesSlice.reducer
})

export const store = configureStore({
reducer: reducers
})

store.subscribe(() => {
    const auth = store.getState().auth
    localStorage.setItem("auth", JSON.stringify(auth))
})

console.log(store)

//private route public route прочитать и сделать 