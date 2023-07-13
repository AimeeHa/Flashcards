import React, { createContext, useState, useEffect } from 'react';

type User = {
  username: string | null;
  userID: number | null;
};

export const UserContext = createContext<User | null>(null);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [userID, setUserID] = useState<number | null>(null);

  const checkLogin = async () => {
    const response = await fetch('http://localhost:8000/getuserinfo/', {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 200) {
      setUsername(((await response.json()) as any).name);
      setUserID(((await response.json()) as any).id);
    } else {
      setUsername(null);
      setUserID(null);
    }
  };

  useEffect(() => {
    checkLogin();
    console.log(userID); ///WHY IS THIS NULL
  }, []);

  return (
    <UserContext.Provider value={{ username, userID }}>
      {children}
    </UserContext.Provider>
  );
};
