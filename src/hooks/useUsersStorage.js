import { useEffect } from "react";
import { STORAGE_KEY } from "../constants/user";

const defaultUsers = [
    { id: 'alexandr-30091982', name: 'Александр' },
    { id: 'guest-01', name: 'Гость1' },
    { id: 'guest-02', name: 'Гость2' },
    { id: 'guest-03', name: 'Гость3' },
    { id: 'guest-04', name: 'Гость4' },
]

export const useUsersStorage = () => {
    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
        }
    }, []);
};
