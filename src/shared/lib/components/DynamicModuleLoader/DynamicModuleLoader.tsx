import {FC, ReactNode, useEffect} from 'react';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
    children: ReactNode
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const {
        reducers, children, removeAfterUnmount,
    } = props;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = name in mountedReducers;
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
