import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState, UserFormData } from "../types/dataTypes";

const initialState: DataState = {
    richTextContent: "",
    counter: 0,
    userFormData: {
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
    },
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setRichTextContent(state, action: PayloadAction<string>) {
            state.richTextContent = action.payload;
        },
        incrementCounter(state) {
            state.counter += 1;
        },
        decrementCounter(state) {
            state.counter -= 1;
        },
        resetCounter(state) {
            state.counter = 0;
        },
        updateUserFormField(
            state,
            action: PayloadAction<{ field: keyof UserFormData; value: string }>
        ) {
            state.userFormData[action.payload.field] = action.payload.value;
        },
        setUserFormData(state, action: PayloadAction<UserFormData>) {
            state.userFormData = action.payload;
        },
    },
});

export const {
    setRichTextContent,
    incrementCounter,
    decrementCounter,
    resetCounter,
    updateUserFormField,
    setUserFormData,
} = dataSlice.actions;
export default dataSlice.reducer;
