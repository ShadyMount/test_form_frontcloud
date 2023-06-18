import {FC} from 'react';
import styles from './Advantages.module.scss'
import {Text} from "shared/ui/Text/Text";
import {HStack, VStack} from "shared/ui/Stack";
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import DeleteIcon from "shared/assets/icons/Delete.svg";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getFormData} from "features/RegisterForm/model/selectors/registerFormSelectors";
import {registerFormActions} from "features/RegisterForm/model/slices/registerFormSlice";

interface AdvantagesProps {
    className?: string;
}

export const Advantages: FC<AdvantagesProps> = ({className}) => {

    const dispatch = useAppDispatch()
    const {advantages} = useSelector(getFormData)
    const inputs = Object.keys(advantages)

    const handleInputChange = (newVal:string, inputId:string) => {
        dispatch(registerFormActions.setAdvantages({...advantages, [inputId]: newVal}))
    };

    const handleCreateAdvantage = () => {
        const newFieldName = String(Number(inputs.at(-1)) + 1)
        dispatch(registerFormActions.setAdvantages({...advantages, [newFieldName]: ''}))
    }

    const handleDeleteInput = (inputId:string) => {
        const newAdvantages = {...advantages}
        delete newAdvantages[inputId]
        dispatch(registerFormActions.setAdvantages(newAdvantages))
    }
    return (
        <VStack max gap={8}>
            <Text text={'Advantages'} />
            {inputs.map((inputId) => (
                <HStack gap={8}>
                    <Input
                        onChange={(newVal) => handleInputChange(newVal, inputId)}
                        id={'field-advantages-' + inputId}
                        className={styles.inputWrapper}
                        inputClassName={styles.input}
                        value={advantages[inputId]}
                    />
                    <Button
                        theme={ThemeButton.OUTLINE}
                        id={'button-remove-' + inputId}
                        className={styles.deleteButton}
                        onClick={() => handleDeleteInput(inputId)}
                    >
                        <Icon Svg={DeleteIcon} />
                    </Button>
                </HStack>
            ))}
            <Button id={'button-add'} className={styles.createButton} theme={ThemeButton.OUTLINE} onClick={handleCreateAdvantage}>+</Button>
        </VStack>
    );
};
