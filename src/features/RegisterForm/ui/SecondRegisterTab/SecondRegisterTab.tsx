import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './SecondRegisterTab.module.scss'
import {HStack, VStack} from "shared/ui/Stack";
import {Advantages} from "features/RegisterForm/ui/SecondRegisterTab/Advantages/Advantages";
import {CheckboxGroup} from "features/RegisterForm/ui/SecondRegisterTab/CheckboxGroup/CheckboxGroup";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {registerFormActions} from "features/RegisterForm/model/slices/registerFormSlice";
import {Radio} from "features/RegisterForm/ui/SecondRegisterTab/Radio/Radio";
import {useSelector} from "react-redux";
import {getFormData} from "features/RegisterForm/model/selectors/registerFormSelectors";
import {checkboxType} from "../../model/types/registerForm";
import {Button} from "shared/ui/Button/Button";

interface SecondRegisterTabProps {
    className?: string;
    setCurrentTab: (tab: number) => void
}


export const SecondRegisterTab: FC<SecondRegisterTabProps> = ({className, setCurrentTab}) => {

    const dispatch = useAppDispatch()
    const {checkbox} = useSelector(getFormData)
    const checkboxesChangeHandler = (newCheckboxes: checkboxType[]) => {
        dispatch(registerFormActions.setCheckbox(newCheckboxes)
        )
    }

    return (
        <VStack gap={24} className={classNames(styles.SecondRegisterTab, {}, [className])}>
            <Advantages />
            <CheckboxGroup checkboxes={checkbox} onChange={checkboxesChangeHandler}/>
            <Radio />
            <HStack max justify={'between'}>
                <Button onClick={() =>setCurrentTab(0)}>
                    Назад
                </Button>
                <Button onClick={() =>setCurrentTab(2)}>
                    Далее
                </Button>
            </HStack>
        </VStack>
    );
};
