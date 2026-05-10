import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      
    ],
  },
  // {
  //   path: '*', // Catch-all route for 404 Not Found
  //   element: <NotFound />,
  // },
 

 
]);

export default router;
