function tiposbasicos(){

	const nombre: string = "Alexander";
	const edad: number = 26
	const estaActivo: boolean = true; 
	const powers: string[] = [];

	return(
		<>
			<h3>Tipos Basicos</h3>
			{nombre}, {edad} {(estaActivo) ? 'activo': 'no activo'}
		</>
	);
}

export default tiposbasicos;