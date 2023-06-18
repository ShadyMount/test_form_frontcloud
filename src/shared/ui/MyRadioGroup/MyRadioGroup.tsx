import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './MyRadioGroup.module.scss'
import { Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'


interface RadioGroupProps {
    className?: string;
    items: string[];
    onChange: (item: number) => void;
    value: number;
}

export const MyRadioGroup: FC<RadioGroupProps> = ({className, value, items, onChange}) => {

    return (
            <RadioGroup className={classNames('', {}, [className])} value={value} onChange={onChange}>
                <RadioGroup.Label>Radio group</RadioGroup.Label>
                {items.map((item) => (
                    <RadioGroup.Option key={item} value={item} as={Fragment}>
                        {({ active, checked }) => (
                            <label className={styles.item}>
                                <input type="radio" name="radio" id={`field-radio-group-option-${item}`} checked={checked}/>
                                <span>{item}</span>
                            </label>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
    );
};
