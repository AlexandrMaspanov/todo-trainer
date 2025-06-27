import { lazy } from 'react';
import RootLayout from '../layout/rootlayout/RootLayout';
import NotFound from '../pages/notfound/NotFound';

const Todos = lazy(() => import('../pages/todos/Todos'));
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const Profile = lazy(() => import('../pages/profile/Profile'));

const routes = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Todos /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'profile', element: <Profile /> },
            // { path: 'profile', element: <RequireAuth><Profile /></RequireAuth> },
        ],
    },
];

export default routes;
