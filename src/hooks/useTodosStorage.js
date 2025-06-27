import { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_KEY } from "../constants/user";

export function useTodosStorage() {
    const todos = useSelector(state => state.todos.todos);

    useEffect(() => {
        try {
            localStorage.setItem(`todos:${USER_KEY}`, JSON.stringify(todos));
        } catch {}
    }, [todos]);
}
