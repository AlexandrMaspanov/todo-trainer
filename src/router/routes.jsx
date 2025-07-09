// import { lazy } from 'react';
import MainLayout from '../layouts/mainlayout/MainLayout';
import AuthLayout from '../layouts/authlayout/AuthLayout';
import NotFound from '../pages/notfound/NotFound';
import RequireAuth from '../components/RequireAuth';

import Todos from '../pages/todos/Todos';
import Profile from '../pages/profile/Profile';
import Test from '../pages/test/Test';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

// const Todos = lazy(() => import('../pages/todos/Todos'));
// const Login = lazy(() => import('../pages/login/Login'));
// const Register = lazy(() => import('../pages/register/Register'));
// const Profile = lazy(() => import('../pages/profile/Profile'));
// const Test = lazy(() => import('../pages/test/Test'));

const routes = [
    {
        path: '/',
        element: <RequireAuth><MainLayout /></RequireAuth>,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Todos /> },
            { path: 'profile', element: <Profile /> },
            { path: 'test', element: <Test /> },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ],
    },
];

export default routes;
