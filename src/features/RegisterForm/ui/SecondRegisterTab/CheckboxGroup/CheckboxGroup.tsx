import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './CheckboxGroup.module.scss'
import {VStack} from "shared/ui/Stack";
import Checkbox from "shared/ui/Checkbox/Checkbox";
import {Text} from "shared/ui/Text/Text";


interface CheckBoxItem {
    label: number,
    checked: boolean
}
interface CheckboxGroupProps {
    className?: string;
    checkboxes: CheckBoxItem[];
    onChange: (checkboxes: CheckBoxItem[]) => void;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({className, checkboxes, onChange}) => {


    const onChangeHandler = (id: number) => {
        const newArr = JSON.parse(JSON.stringify(checkboxes))

        newArr.map((el: CheckBoxItem) => {
            if (el.label === id) {
                el.checked = !el.checked
            }
            return el
        })
        onChange(newArr)
    }

    return (
        <VStack gap={8} className={classNames(styles.CheckboxGroup, {}, [className])}>
            <Text text={'Checkbox Group'} />
            {
                checkboxes.map((checkbox) => (
                    <Checkbox
                        key={checkbox.label}
                        label={checkbox.label}
                        checked={checkbox.checked}
                        id={'field-checkbox-group-option-' + checkbox.label}
                        onChange={() => onChangeHandler(checkbox.label)}
                    />
                ))
            }
        </VStack>
    );
};
