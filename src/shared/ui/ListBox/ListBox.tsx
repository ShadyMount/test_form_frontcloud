import { FC, Fragment, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './ListBox.module.scss'
import {Listbox as HLisBox} from '@headlessui/react'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {VStack} from "shared/ui/Stack";

export interface ListBoxItem {
 value: string;
 content: ReactNode;
 disabled?: boolean;
 id?: string
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readOnly: boolean;
    label?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    SelectIcon?: ReactNode;
    elementId?:string;
}


export const ListBox: FC<ListBoxProps> = (props) => {
    const {className, items, value, defaultValue, onChange, readOnly, label, labelClassName, wrapperClassName, SelectIcon, elementId} = props;

    return (
        <VStack gap={8} className={classNames('', {}, [wrapperClassName])}>
            {
                label &&
                <span
                    className={classNames('', {[styles.disabled]: readOnly}, [labelClassName])}
                >
                    {label}
                </span>
            }
            <HLisBox
                disabled={readOnly}
                as={'div'}
                className={classNames(styles.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HLisBox.Button as={Fragment} >
                    <Button theme={ThemeButton.OUTLINE} id={elementId} className={styles.button} disabled={readOnly}>
                        {value ?? defaultValue}
                        {SelectIcon && SelectIcon}
                    </Button>
                </HLisBox.Button>
                <HLisBox.Options className={styles.options}>
                    {items?.map((item) => (
                        <HLisBox.Option
                            key={item.value}
                            as={Fragment}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({active, selected}) => (
                                <li
                                    id={item.id}
                                    className={classNames(
                                        styles.item,
                                        {
                                            [styles.active]: active,
                                            [styles.disabled]: item.disabled,
                                        },
                                        [className]
                                    )}
                                >
                                    {selected && '!!! '}
                                    {item.content}
                                </li>
                            )}

                        </HLisBox.Option>
                    ))}
                </HLisBox.Options>
            </HLisBox>
        </VStack>

    );
};
