import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Explore from './Explore.tsx';
import Login from './Login.tsx';

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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
