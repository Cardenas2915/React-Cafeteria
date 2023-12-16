import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Login() {

	
	const emailRef = createRef();
	const passwordRef = createRef();

	const [errores, setErrores] = useState([]);

	const { login } = useAuth({
		middleware:'guest',
		url: '/'
	})

	const handleSubmit = async e => {
		e.preventDefault();

		const datos = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}
		
		login(datos, setErrores);
	}
    return (
        <>
			<h1 className="text-4xl font-black">Iniciar sesion</h1>
			<p>para crear un pedido debes iniciar sesion</p>

			<div className="bg-white shadow-md rounded-md px-5 mt-10 py-10">
				<form onSubmit={handleSubmit} noValidate>

				{errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

					<div className="mb-4">
						<label htmlFor="email" className="text-slate-800">Email</label>
						<input ref={emailRef} type="text" id="email" className="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Tu Email" />
					</div>

					<div className="mb-4">
						<label htmlFor="password" className="text-slate-800">Password</label>
						<input type="password" ref={passwordRef} id="password" className="mt-2 w-full p-3 bg-gray-50" name="password" placeholder="Tu Password" />
					</div>

					<input type="submit" value="Iniciar sesion"  className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"/>
				</form>
			</div>
            <nav className="mt-5">
                <Link to="/auth/Registro">¿No tienes cuenta? Crea una</Link>
            </nav>
		</>
    )
}
