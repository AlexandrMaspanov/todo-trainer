import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserId, setTodosByUserId } from "../utils/storage";

export function useTodosStorage() {
    const userId = getCurrentUserId();
    const todos = useSelector(state => state.todos.todos);

    useEffect(() => {
        setTodosByUserId(userId, todos);
    }, [todos]);
}
