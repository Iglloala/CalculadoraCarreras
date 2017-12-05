// MÓDULO Calculator
var Calculator = (function(objeto){

	//Clase Time
	 objeto.Time = function(hours, minutes, seconds){
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
	}

	// Clase Imperial
	objeto.Imperial = function(miles, yards, feet){
		this.miles = miles;
		this.yards = yards;
		this.feet = feet;
	}	

	// Método público show()
	objeto.show = function(){
		// CREO LOS ELEMENTOS:
		// contenedor
		var interfaz = document.createElement('div');
		// titulo
		var titulo = document.createElement('h1');
		titulo.appendChild(document.createTextNode('Calculadora de ritmos de paso'));
		// INSERTO LOS ELEMENTOS EN EL ELEMENTO PRINCIPAL 'INTERFAZ'
		interfaz.appendChild(titulo);
		
		// RETORNO EL ELEMENTO INTERFAZ COMPLETO
		return interfaz;
	}

	// Aquí retorna el objeto
	return objeto;
})(Calculator || {});

