import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import Resumenproducto from "./Resumenproducto";

export default function Resumen() {
	const { pedido, total } = useQuiosco();
	const comprobarPedido = () => pedido.length === 0;

	return (
		<aside className="md:w-72 h-screen overflow-y-scroll p-5">
			<h1 className="text-4xl font-black items-center">Mi pedido</h1>
			<p className="text-lg my-5">
				Aqui podras ver el resumen total de tu pedido
			</p>
			<div className="py-10">
				{pedido.length === 0 ? (
					<p className="text-center text-2xl">No hay elementos en tu pedido</p>
				) : (
					pedido.map((producto) => (
						<Resumenproducto key={producto.id} producto={producto} />
					))
				)}
			</div>
			<p className="text-xl mt-10">
				Total:{""}
				{formatearDinero(total)}
			</p>
			<form action="" className="w-full mt-10">
				<div className="">
					<input
						type="submit"
						disabled={comprobarPedido()}
						value="Confirmar pedido"
						className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
					/>
				</div>
			</form>
		</aside>
	);
}
