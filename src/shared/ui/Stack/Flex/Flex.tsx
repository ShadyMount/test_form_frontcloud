import {
    DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 4 | 8 | 16 | 24 | 32

const justifyClasses : Record<FlexJustify, string> = {
    end: styles.justifyEnd,
    between: styles.justifyBetween,
    center: styles.justifyCenter,
    start: styles.justifyStart,
};

const alignClasses : Record<FlexAlign, string> = {
    end: styles.alignEnd,
    center: styles.alignCenter,
    start: styles.alignStart,
};

const directionClasses : Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    24: styles.gap24,
    32: styles.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        align = 'center',
        direction = 'row',
        justify = 'start',
        gap,
        max,
    } = props;

    const classes = [
        className,
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [styles.max]: max,
    };

    return (
        <div className={classNames(styles.Flex, mods, classes)}>
            {children}
        </div>
    );
};
