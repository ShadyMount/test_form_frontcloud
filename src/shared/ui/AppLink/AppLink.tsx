/* eslint-disable react/jsx-props-no-spreading */
import {ForwardedRef, forwardRef, memo} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink =  forwardRef((props:AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        ...otherProps
    } = props;

    return (
        <Link
            ref={ref}
            to={to}
            className={classNames('', {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
