import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './ThirdRegisterTab.module.scss'
import {HStack, VStack} from "shared/ui/Stack";
import {TextArea} from "shared/ui/TextArea/TextArea";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getFormData,
    getFormDataError,
    getFormDataIsLoading,
    getFormDataResponse
} from "../../model/selectors/registerFormSelectors";
import {registerFormActions} from "../../model/slices/registerFormSlice";
import {Modal} from "shared/ui/Modal/Modal";
import {Text} from "shared/ui/Text/Text";
import {Icon} from "shared/ui/Icon/Icon";
import SuccessIcon from 'shared/assets/icons/Success.svg'
import CloseIcon from 'shared/assets/icons/Close.svg'
import ErrorIcon from 'shared/assets/icons/Error.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "shared/config/routeConfig/routeConfig";
import {registerRequest} from "../../model/services/registerRequest";
import {Loader} from "shared/ui/Loader/Loader";

interface ThirdRegisterTabProps {
    className?: string;
    setCurrentTab: (tab: number) => void;
}

export const ThirdRegisterTab: FC<ThirdRegisterTabProps> = ({className, setCurrentTab}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {about} = useSelector(getFormData)
    const isLoading = useSelector(getFormDataIsLoading)
    const error = useSelector(getFormDataError)
    const response = useSelector(getFormDataResponse)
    const onChangeAbout = (newValue: string) => {
        dispatch(registerFormActions.setAbout(newValue))
    }
    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const toMainButtonHandler = () => {
        navigate(AppRoutes.MAIN)
    }
    const onSendHandler = () => {
        dispatch(registerRequest())
        setIsModalOpen(true)
    }
    return (
        <VStack max gap={24} className={classNames(styles.ThirdRegisterTab, {}, [className])}>
            <TextArea value={about} limit={200} placeholder={'About'} onChange={onChangeAbout} label={'About'} id={'field-about'} />
            <HStack max justify={'between'}>
                <Button onClick={() =>setCurrentTab(1)}>
                    Назад
                </Button>
                <Button onClick={onSendHandler}>
                    Отправить
                </Button>
            </HStack>
            <Modal lazy isOpen={isModalOpen} onClose={onModalClose} >
                <VStack className={styles.modal} max justify={'center'} align={'center'} gap={24}>
                    {!isLoading && response && <Text title={'Форма успешно отправлена'}/>}
                    {!isLoading && error &&
                        <HStack max justify={'between'}>
                            <Text title={'Ошибка'}/>
                            <Button theme={ThemeButton.CLEAR} onClick={() => setIsModalOpen(false)}>
                                <Icon Svg={CloseIcon} />
                            </Button>
                        </HStack>
                        }
                    {isLoading && <Loader />}

                    {!isLoading && response && <Icon Svg={SuccessIcon} className={styles.icon}/>}
                    {!isLoading && error && <Icon Svg={ErrorIcon} className={styles.icon}/>}
                    <Button id={'button-to-main'} onClick={toMainButtonHandler}>На главную</Button>
                </VStack>
            </Modal>
        </VStack>
    );
};
