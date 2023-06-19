import React from 'react';
import { Page } from 'widgets/Page/Page';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {registerFormReducer} from "features/RegisterForm/model/slices/registerFormSlice";
import { Tabs} from "widgets/Tabs/Tabs";


const reducers:ReducersList = {
    registerForm: registerFormReducer,
};



const CreatePage = () => {

    return (
        <DynamicModuleLoader reducers={reducers}>
        <Page>
            <Tabs />

        </Page>
        </DynamicModuleLoader>
    );
};

export default CreatePage;
