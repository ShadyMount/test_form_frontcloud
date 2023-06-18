import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?:string;
    size?: number;
}

export const Avatar:FC<AvatarProps> = (props) => {
    const {
        src,
        className,
        alt,
        size = 80,
    } = props;
    const mods: Mods = {};
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={classNames(styles.Avatar, mods, [className])}
        />
    );
};
