import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Explore from './Explore.tsx';
import Login from './Login.tsx';
import Register from './Register.tsx';
import { UserProvider } from './UserProvider.tsx';
import MyStudy from './MyStudy.tsx';
import CreateFC from './CreateFC.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // home page
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/mystudy',
    element: <MyStudy />,
  },
  {
    path: '/create',
    element: <CreateFC />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
