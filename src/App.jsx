import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Homepage from './pages/Homepage';
import Servises from './pages/Services';
import ServiseEntry from './pages/ServiceEntry';
import Publications from './pages/Publications';
import PublicationEntry from './pages/PublicationEntry';
import Team from './pages/Team';
import TeamEntry from './pages/TeamEntry';
import Contact from './pages/Contact';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/services',
        element: <Servises />
      },
      {
        path: '/services/:id',
        element: <ServiseEntry />
      },
      {
        path: '/publications',
        element: <Publications />
      },
      {
        path: '/publications/:id',
        element: <PublicationEntry />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/team/:id',
        element: <TeamEntry />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
