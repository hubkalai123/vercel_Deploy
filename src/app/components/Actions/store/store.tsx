import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../reducers/todos";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

