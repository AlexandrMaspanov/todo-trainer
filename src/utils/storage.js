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

// Получить из localStorage список задач пользователя по его id
export const getTodosByUserId = (userId) => {
    if (!userId) return [];
    const data = localStorage.getItem(`todos:${userId}`);
    return data ? JSON.parse(data) : [];
};

// Сохранить в localStorage список задач пользователя по его id
export const setTodosByUserId = (userId, todos) => {
    if (!userId) return;
    localStorage.setItem(`todos:${userId}`, JSON.stringify(todos));
};

// Удалить из localStorage список задач пользователя по его id
export const removeUserTodos = (userId) => {
    if (!userId) return;
    localStorage.removeItem(`todos:${userId}`);
}

// Получить пользователя по его id из localStorage
export const getUserById = (userId) => {
    if (!userId) return null;

    const users = getStoragedUsers();
    return users.find((user) => user.id === userId) || null;
};

// Обновить в localStorage профиль пользователя по его id
export const updateUserById = (userId, patch) => {
    if (!userId) return;

    const users = getStoragedUsers();
    const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, ...patch } : user
    );

    setStoragedUsers(updatedUsers);
};

// Удалить из localStorage профиль текущего пользователя
export const deleteCurrentUser = () => {
    const userId = getCurrentUserId();
    if (!userId) return;

    const users = getStoragedUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    setStoragedUsers(updatedUsers);
}

// Обобщенная функция
// Удалить из localStorage список задач пользователя по id,
// профиль текущего пользователя, id текущего пользователя
export const purgeCurrentUserData = () => {
    const userId = getCurrentUserId();
    if (!userId) return;

    removeUserTodos(userId);
    deleteCurrentUser();
    removeCurrentUserId();
}
