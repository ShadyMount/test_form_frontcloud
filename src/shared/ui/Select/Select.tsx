import {
    ChangeEvent,
    useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean
}

export const Select = <T extends string>(props:SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly,
    } = props;

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option key={value} value={value} className={styles.option}>{content}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const mods: Mods = {};

    return (
        <div className={classNames(styles.SelectWrapper, mods, [className])}>
            {label && <span className={styles.label}>{label}</span>}
            <select
                className={styles.Select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
};
