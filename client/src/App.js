import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'

import './app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
