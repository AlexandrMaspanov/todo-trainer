import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUserId, getUserById } from '../utils/storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(getCurrentUserId());
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUserId) {
      const user = getUserById(currentUserId);
      setCurrentUser(user);
    }
  }, [currentUserId]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
