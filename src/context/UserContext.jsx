import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUserId, getUserById } from '../utils/storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const id = getCurrentUserId();
    if (id) {
      const user = getUserById(id);
      setCurrentUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
