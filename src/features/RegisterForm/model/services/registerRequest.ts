import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getFormData} from "features/RegisterForm/model/selectors/registerFormSelectors";

interface RegisterResponse {
    message: string,
    status: string
}

export const registerRequest = createAsyncThunk<
    RegisterResponse,
    void,
    ThunkConfig<string>
    >(
    'create/register',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const authData = getFormData(getState())

        try {
            const response = await extra.api.post<any>('/', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
