import { StateSchema } from 'app/providers/StoreProvider';

export const getFormData = (state: StateSchema) => state?.registerForm?.formData || {
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
        },
    ],
    about: '',
};
export const getFormDataError = (state: StateSchema) => state?.registerForm?.error;
export const getFormDataIsLoading = (state: StateSchema) => state?.registerForm?.isLoading;
export const getFormDataResponse = (state: StateSchema) => state?.registerForm?.response;
