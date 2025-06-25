import { lazy } from 'react';
import RootLayout from '../layout/rootlayout/RootLayout';
import NotFound from '../pages/notfound/NotFound';

const Todos = lazy(() => import('../pages/todos/Todos'));
const Profile = lazy(() => import('../pages/profile/Profile'));

const routes = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Todos /> },
            { path: 'profile', element: <Profile /> },
        ],
    },
];

export default routes;
