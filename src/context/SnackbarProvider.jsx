import React, { createContext, useContext, useState, useCallback } from 'react';
import Snackbar from '../components/UI/snackbar/Snackbar';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
    const [snack, setSnack] = useState(null);

    const showSnackbar = useCallback((message, type) => {
        if (!type) return;

        setSnack({ message, type });

        setTimeout(() => setSnack(null), 3000); // авто-сброс
    }, []);

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            {snack && <Snackbar message={snack.message} type={snack.type} />}
        </SnackbarContext.Provider>
    );
};

export const useSnackbarContext = () => useContext(SnackbarContext);
