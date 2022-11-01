import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        isLoading: true,
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        }
    }
}) 

export const carsSliceAction = carsSlice.actions
export const carsSliceReducer = carsSlice.reducer