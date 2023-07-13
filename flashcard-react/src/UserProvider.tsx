import React, { createContext, useState, useEffect } from 'react';

type User = {
  username: string | null;
  email: string | null;
};

export const UserContext = createContext<User | null>(null);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const checkLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/getuserinfo/', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.status === 200) {
        const data = await response.json();
        setUsername(data.name);
        setEmail(data.email);
      } else {
        setUsername(null);
        setEmail(null);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      setUsername(null);
      setEmail(null);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <UserContext.Provider value={{ username, email }}>
      {children}
    </UserContext.Provider>
  );
};
