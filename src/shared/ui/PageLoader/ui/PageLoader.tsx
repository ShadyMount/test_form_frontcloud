import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Loader } from '../../Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader:FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
