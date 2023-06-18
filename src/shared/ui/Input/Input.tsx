/* eslint-disable react/jsx-props-no-spreading */

import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './Input.module.scss';
import {MaskedInput} from "shared/ui/MaskedInput/MaskedInput";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps{
    className?: string;
    inputClassName?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    inputId?: string;
    tip?: string | null;
    autofocus?: boolean;
    readonly?: boolean;
    lazy?: boolean;
    mask?:string;
    placeholderChar?: string;
    onAccept?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = 'text',
        label,
        autofocus,
        readonly,
        tip,
        inputId,
        inputClassName,
        mask,
        placeholderChar,
        ...otherProps
    } = props;


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            { label
                && (
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                    </label>
                ) }
            {
                mask
                ? <MaskedInput
                        className={classNames(styles.input, mods, [inputClassName])}
                        id={inputId}
                        disabled={readonly}
                        onChange={onChangeHandler}
                        value={String(value)}
                        type={type}
                        mask={mask}
                        placeholderChar={placeholderChar}
                        readOnly={readonly}
                        {...otherProps}
                    />
                    : <input
                        className={classNames(styles.input, mods, [inputClassName])}
                        id={inputId}
                        disabled={readonly}
                        onChange={onChangeHandler}
                        value={value}
                        type={type}
                        readOnly={readonly}
                    />
            }

            {tip && <span className={styles.tip}>{tip}</span>}
        </div>
    );
});
