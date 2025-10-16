import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Carrinho from './pages/Carrinho';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'perfil', element: <Perfil /> },
      { path: 'carrinho', element: <Carrinho /> },
    ],
  },
]);

export default router;
