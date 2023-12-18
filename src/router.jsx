import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/authLayout";
import Layouts from "./layouts/layout";
import Inicio from "./views/Inicio";
import Login from "./views/login";
import Registro from "./views/Registro";
import AdminLayout from "./layouts/AdminLayout";
import Ordenes from "./views/Ordenes";
import Producto from "./components/Producto";
import Productos from "./views/Productos";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layouts />,
		children: [
			{
				index: true,
				element: <Inicio />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/auth/Registro",
				element: <Registro />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <Ordenes />,
			},
			{
                path: '/admin/productos',
                element: <Productos />
            },
		],
	},
]);

export default router;
