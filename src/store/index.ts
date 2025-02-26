import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
