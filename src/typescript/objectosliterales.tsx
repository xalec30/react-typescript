interface Persona{
	nombre: string,
	edad:number,
	direccion:Direccion
}

interface Direccion{
	nro:string	
}


function objectorliterales(){

	const persona: Persona = {
		nombre: 'Alexander',
		edad: 26,
		direccion:{
			nro:'a-39'
		}
	}

	return(
		<>
			<h3>objector literales</h3>
			<code>
				<pre>
					{JSON.stringify(persona,null,2)}
				</pre>
			</code>
		</>
	);
}

export default objectorliterales;