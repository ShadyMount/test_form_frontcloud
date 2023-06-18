import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError:FC<PageErrorProps> = ({ className }) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>Unexpected error</p>
            <Button onClick={reloadPage}>Reload page</Button>
        </div>
    );
};
