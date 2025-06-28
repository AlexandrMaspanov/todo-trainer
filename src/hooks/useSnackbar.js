import { useSnackbarContext } from '../context/SnackbarProvider';

const useSnackbar = () => {
    const { showSnackbar } = useSnackbarContext();
    return { showSnackbar };
};

export default useSnackbar;
