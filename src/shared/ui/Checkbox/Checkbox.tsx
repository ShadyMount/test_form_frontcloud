import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Checkbox.module.scss'

interface CheckboxProps {
    className?: string;
    id?:string,
    checked?: boolean;
    label?: string | number;
    onChange?: () => void
}

export const Checkbox: FC<CheckboxProps> = ({className, checked, label, id, onChange, ...props}) => {

    return (
        <div className={classNames(styles.Checkbox, {}, [className])}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <label className={styles.label} htmlFor={id}>{label}</label>
        </div>
    );
};


export default Checkbox;
