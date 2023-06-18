import React, {useState} from 'react';
import { Page } from 'widgets/Page/Page';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {registerFormReducer} from "features/RegisterForm/model/slices/registerFormSlice";
import {TabItem, Tabs} from "widgets/Tabs/Tabs";
import {FirstRegisterTab} from "features/RegisterForm/ui/FirstRegisterTab/FirstRegisterTab";
import {Button} from "shared/ui/Button/Button";
import {HStack} from "shared/ui/Stack";
import {SecondRegisterTab} from "features/RegisterForm/ui/SecondRegisterTab/SecondRegisterTab";


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
