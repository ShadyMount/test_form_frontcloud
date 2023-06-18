import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Divider.module.scss'

interface DividerProps {
    className?: string;
}

export const Divider: FC<DividerProps> = ({className}) => {
    return (
        <hr className={classNames(styles.Divider, {}, [className])} />
    );
};
