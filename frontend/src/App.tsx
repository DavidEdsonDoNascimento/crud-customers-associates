import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './global.css'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | desafio' />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
