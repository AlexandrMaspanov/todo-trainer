const USERS_KEY = 'users';
const USER_ID_KEY = 'userId';

// Получить массив всех пользователей из localStorage
export const getStoragedUsers = () => {
    const usersStorage = localStorage.getItem(USERS_KEY);
    return usersStorage ? JSON.parse(usersStorage) : [];
};

// Сохранить пользователей в localStorage
export const setStoragedUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Получить id текущего пользователя из localStorage
export const getCurrentUserId = () => {
    return localStorage.getItem(USER_ID_KEY);
};

// Сохранить id текущего пользователя в localStorage
export const setCurrentUserId = (id) => {
    localStorage.setItem(USER_ID_KEY, id);
};

// Удалить id текущего пользователя из localStorage
export const removeCurrentUserId = () => {
    localStorage.removeItem(USER_ID_KEY);
};

// Получить список задач пользователя по его id из localStorage
export const getTodosByUserId = (userId) => {
    if (!userId) return [];
    const data = localStorage.getItem(`todos: ${userId}`);
    return data ? JSON.parse(data) : [];
};

// Сохранить список задач пользователя по его id в localStorage
export const setTodosByUserId = (userId, todos) => {
    if (!userId) return;
    localStorage.setItem(`todos: ${userId}`, JSON.stringify(todos));
};
