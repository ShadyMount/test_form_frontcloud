import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Page } from 'widgets/Page/Page';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
    return (
        <Page className={classNames(styles.NotFoundPage, {}, [className])}>
            pageNotFound
        </Page>
    );
};
