import {createSlice} from "@reduxjs/toolkit";


const auth = JSON.parse(localStorage.getItem("auth"))

const authSlice = createSlice({
    name: 'auth',
    initialState: auth || {
        isAuth: false,
        login: "",
    },
    reducers: {
        setAuth: (state, action) => {
            console.log(state, action);
            state.isAuth = action.payload
        },
        logout: (state) => {
            state.isAuth = false
        }
    }
})
export const authSliceAction = authSlice.actions

export const authSliceReducer = authSlice.reducer