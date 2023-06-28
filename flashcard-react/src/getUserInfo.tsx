import { useEffect, useState } from 'react';

export default function getUserInfo() {
  const [userName, setUserName] = useState('');

  const checkLogin = async () => {
    const response = await fetch('http://localhost:8000/getuserinfo/', {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 200) {
      setUserName((await response.json()).name);
    } else {
      setUserName('');
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return userName;
}
