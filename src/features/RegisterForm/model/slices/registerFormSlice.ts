import { createSlice, PayloadAction,  } from '@reduxjs/toolkit';
import {checkboxType, RegisterFormSchema, Sex} from '../types/registerForm';
import {registerRequest} from "../services/registerRequest";

const initialState: RegisterFormSchema = {
    formData: {
        nickname:'',
        name:'',
        sername:'',
        phone:'',
        email:'',
        sex: undefined,
        advantages: {'1':''},
        radio: 0,
        checkbox: [
            {
                label: 1,
                checked: false
            },
            {
                label: 2,
                checked: false
            },
            {
                label: 3,
                checked: false
            }
        ],
        about: '',
    },
    isLoading: false
};

export const registerFormSlice = createSlice({
    name: 'registerForm',
    initialState,
    reducers: {
        setNickname: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.nickname = action.payload;
        },
        setName: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.name = action.payload;
        },
        setSername: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.sername = action.payload;
        },
        setPhone: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.phone = action.payload;
        },
        setEmail: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.email = action.payload;
        },
        setSex: (state: RegisterFormSchema, action:PayloadAction<Sex>) => {
            state.formData.sex = action.payload;
        },
        setAdvantages: (state: RegisterFormSchema, action:PayloadAction<Record<string, string>>) => {
            state.formData.advantages = action.payload;
        },
        setRadio: (state: RegisterFormSchema, action:PayloadAction<number>) => {
            state.formData.radio = action.payload;
        },
        setCheckbox: (state: RegisterFormSchema, action:PayloadAction<checkboxType[]>) => {
            state.formData.checkbox = action.payload;
        },
        setAbout: (state: RegisterFormSchema, action:PayloadAction<string>) => {
            state.formData.about = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerRequest.fulfilled, (state: RegisterFormSchema, action) => {
                state.response = action.payload.message;
                state.isLoading = false;
            })
            .addCase(registerRequest.pending, (state: RegisterFormSchema) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerRequest.rejected, (state: RegisterFormSchema, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const { actions: registerFormActions } = registerFormSlice;
export const { reducer: registerFormReducer } = registerFormSlice;
