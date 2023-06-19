import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './UserDataInputs.module.scss'
import {Input} from "shared/ui/Input/Input";
import {VStack} from "shared/ui/Stack";
import {Button} from "shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "shared/config/routeConfig/routeConfig";
import {useSelector} from "react-redux";
import {getFormData} from "features/RegisterForm/model/selectors/registerFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {registerFormActions} from "features/RegisterForm/model/slices/registerFormSlice";

interface UserDataInputsProps {
    className?: string;
}

export const UserDataInputs: FC<UserDataInputsProps> = ({className}) => {
    const [error, setError] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const {phone, email} = useSelector(getFormData)


    const validPhoneLength = phone.replaceAll(' ', '').length === 16
    const navigate = useNavigate()
    const onStartHandler = () => {
        if(validPhoneLength && !error) {
            navigate(AppRoutes.CREATE, {})
        }
    }

    const onPhoneChange = (newPhone: string) => {

    dispatch(registerFormActions.setPhone(newPhone))
    }

    const onEmailChange = (newEmail: string) => {
        if (!isValidEmail(newEmail)) {
            setError('Некорректный email');
        } else {
            setError(null);
        }
        dispatch(registerFormActions.setEmail(newEmail))
    }

    function isValidEmail(email:string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <VStack gap={24} className={classNames(styles.UserDataInputs, {}, [className])}>
            <Input
                className={styles.inputWrapper}
                inputClassName={styles.input}
                placeholder={'+7 999 999 99 99'}
                label={'Номер телефона'}
                value={phone}
                lazy={false}
                mask={'+{7} (000) 000-00-00'}
                placeholderChar={' '}
                onAccept={(value: string) =>onPhoneChange(value)}
            />
            <Input
                className={styles.inputWrapper}
                inputClassName={styles.input}
                value={email}
                placeholder={'example@example.com'}
                label={'Email'}
                tip={error}
                onChange={onEmailChange}
            />
            <Button disabled={!(validPhoneLength && !error && email)} onClick={onStartHandler}>Начать</Button>

        </VStack>
    );
};
