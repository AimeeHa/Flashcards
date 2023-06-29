import { useContext } from 'react';
import { UserContext } from './UserProvider';

export default function useUserInfo() {
  const user = useContext(UserContext);
  return user;
}
