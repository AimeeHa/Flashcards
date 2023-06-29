import React, { createContext, useState, useEffect } from 'react';

type User = string;

export const UserContext = createContext<User | null>(null);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const checkLogin = async () => {
    const response = await fetch('http://localhost:8000/getuserinfo/', {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 200) {
      setUser(((await response.json()) as any).name);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
