import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CreatePage } from 'pages/CreatePage';
import { NotFoundPage } from 'pages/NotFoundPage';


export enum AppRoutes {
    MAIN = '/',
    CREATE = 'create',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CREATE]: '/create',
    [AppRoutes.NOT_FOUND]: '*',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath['/'],
        element: <MainPage />,
    },
    [AppRoutes.CREATE]: {
        path: RoutePath.create,
        element: <CreatePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
