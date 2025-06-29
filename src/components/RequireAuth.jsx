import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSnackbarContext } from '../context/SnackbarProvider';
import { getCurrentUserId } from '../utils/storage';
import { SNACK_TYPES } from '../constants';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { showSnackbar } = useSnackbarContext();
    const userId = getCurrentUserId();

    useEffect(() => {
        if (!userId) {
            showSnackbar('Пожалуйста, войдите', SNACK_TYPES.INFO);
        }
    }, [userId, showSnackbar]);

    if (!userId) {
        return <Navigate to='/login' replace state={{ from: location }} />;
    }

    return children;
}

export default RequireAuth;
