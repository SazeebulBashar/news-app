import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import News from './components/News.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path:'/science',
    element: <><Navbar/><News key={"Science"} pageSize={6} country="us" category="science"/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/sports',
    element: <><Navbar/><News key={"Sports"} pageSize={6} country="us" category="sports"/></>,
    errorElement: <ErrorPage/>
  },

  {
    path:'/business',
    element: <><Navbar/><News key={"Business"} pageSize={6} country="us" category="business"/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/entertainment',
    element: <><Navbar/><News key={"Entertainment"} pageSize={6} country="us" category="entertainment"/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/health',
    element: <><Navbar/><News key={"Health"} pageSize={6} country="us" category="health"/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/technology',
    element: <><Navbar/><News key={"Technology"} pageSize={6} country="us" category="technology"/></>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/general',
    element: <><Navbar/><News key={"General"} pageSize={6} country="us" category="general"/></>,
    errorElement: <ErrorPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
