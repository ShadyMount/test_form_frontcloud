import React from 'react';
import { Page } from 'widgets/Page/Page';
import {UserDataInputs} from "features/UserDataInputs";
import {Divider} from "shared/ui/Divider/Divider";
import {VStack} from "shared/ui/Stack";
import {UserData} from "features/UserData/ui/UserData";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {registerFormReducer} from "features/RegisterForm/model/slices/registerFormSlice";
const reducers:ReducersList = {
    registerForm: registerFormReducer,
};
const MainPage = () => {

    return (
        <DynamicModuleLoader reducers={reducers}>
        <Page>
            <VStack gap={24}>
            <UserData />
            <Divider />
            <UserDataInputs />

            </VStack>
        </Page>
        </DynamicModuleLoader>
    );
};

export default MainPage;
