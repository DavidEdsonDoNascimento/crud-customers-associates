// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button } from './components/ui/button';
import './global.css'

export const App = ()  => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button>Enviar</Button>
    </div>
    // <HelmetProvider>
    //   <Helmet titleTemplate='%s | desafio'/>
    //   <RouterProvider router={router} />
    // </HelmetProvider>
  );
}
