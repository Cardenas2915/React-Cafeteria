import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/authLayout'
import Layouts from './layouts/layout'
import Inicio from './views/Inicio'
import Login from './views/login'
import Registro from './views/Registro'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/Registro',
                element: <Registro />
            }

        ]
    }
])

export default router