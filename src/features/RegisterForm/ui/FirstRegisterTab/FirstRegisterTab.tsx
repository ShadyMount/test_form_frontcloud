import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './FirstRegisterTab.module.scss'
import {Input} from "shared/ui/Input/Input";
import {HStack, VStack} from "shared/ui/Stack";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getFormData} from "../../model/selectors/registerFormSelectors";
import {registerFormActions} from "../../model/slices/registerFormSlice";
import {ListBox, ListBoxItem} from "shared/ui/ListBox/ListBox";
import {Sex} from "../../model/types/registerForm";
import {Icon} from "shared/ui/Icon/Icon";
import SelectIcon from 'shared/assets/icons/SelectDirect.svg'
import {Button} from "shared/ui/Button/Button";

interface FirstRegisterTabProps {
    className?: string;
    setCurrentTab: (tab: number) => void
}

const listboxItems: ListBoxItem[] = [
    {
        value: Sex.MAN,
        content: Sex.MAN,
        id: 'field-sex-option-man'
    },
    {
        value: Sex.WOMAN,
        content: Sex.WOMAN,
        id: 'field-sex-option-woman'
    },
]

export const FirstRegisterTab: FC<FirstRegisterTabProps> = ({className, setCurrentTab}) => {
    const dispatch = useAppDispatch()
    const {nickname, name, sername, sex} = useSelector(getFormData)

    const onNicknameChange = (newNickName:string) => {
        const noSpecialChars = newNickName.replace(/[^a-zA-Z0-9]/g, '');
        dispatch(registerFormActions.setNickname(noSpecialChars))
    }

    const onNameChange = (newName:string) => {
        const noSpecialChars = newName.replace(/[^a-zA-Z]/g, '');
        dispatch(registerFormActions.setName(noSpecialChars))
    }

    const onSernameChange = (newSername:string) => {
        const noSpecialChars = newSername.replace(/[^a-zA-Z]/g, '');
        dispatch(registerFormActions.setSername(noSpecialChars))
    }

    const onSexChange = (newSex: string) => {
        dispatch(registerFormActions.setSex(newSex as Sex))
    }
    const toNextTabHandler = () => {
        if(name && sername && sex && nickname) {
            setCurrentTab(1)
        }
    }
    return (
        <VStack gap={24} className={classNames(styles.FirstRegisterTab, {}, [className])}>
            <Input
                inputId={'field-nickname'}
                className={styles.inputWrapper}
                inputClassName={styles.input}
                placeholder={'Nickname'}
                label={'Nickname'}
                value={nickname}
                lazy={false}
                maxLength={30}
                tip={'Не более 30 символов (буквы и цифры)'}
                placeholderChar={' '}
                onChange={onNicknameChange}
            />
            <Input
                inputId={'field-name'}
                className={styles.inputWrapper}
                inputClassName={styles.input}
                placeholder={'Name'}
                label={'Name'}
                value={name}
                lazy={false}
                maxLength={50}
                tip={'Не более 50 символов (только буквы)'}
                placeholderChar={' '}
                onChange={onNameChange}
            />
            <Input
                inputId={'field-sername'}
                className={styles.inputWrapper}
                inputClassName={styles.input}
                placeholder={'Sername'}
                label={'Sername'}
                value={sername}
                lazy={false}
                maxLength={50}
                tip={'Не более 50 символов (только буквы)'}
                placeholderChar={' '}
                onChange={onSernameChange}
            />
            <ListBox
                items={listboxItems}
                onChange={onSexChange}
                readOnly={false}
                elementId={'field-id'}
                label={'Sex'}
                value={sex as string}
                defaultValue={'Не выбрано'}
                SelectIcon={<Icon Svg={SelectIcon} />}
            />
            <HStack max justify={'end'}>
                <Button onClick={toNextTabHandler} disabled={!(name && sername && sex && nickname)}>
                    Далее
                </Button>
            </HStack>
        </VStack>
    );
};
