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

	// Método que calcula el "pace" a partir de un tiempo en segundos y una distancia en km devolviendo el resultado en km y en millas
	objeto.paceInKm = function(timeInSeconds, distanceInKm){
		// Calculo el pace en km
		var tiempoEnMinutos = parseFloat(timeInSeconds/60);
		var paceEnKm = parseFloat((tiempoEnMinutos/distanceInKm));
		var paceSegundos = paceEnKm*60;
		var timePaceKm = this.secondsToTime(paceSegundos);
		// Calculo el pace en millas
		//var timePaceMiles = this.paceInMiles(timeInSeconds, this.metersToMiles(this.kmToMeters(distanceInKm)));
		var distanceInMiles = this.metersToMiles(this.kmToMeters(distanceInKm));
		var paceEnMillas = parseFloat(tiempoEnMinutos/distanceInMiles);
		paceSegundos = paceEnMillas*60;
		var timePaceMiles = this.secondsToTime(paceSegundos);
		// Y retorno los dos Time con el resultado
		return [timePaceKm, timePaceMiles];
	}

	// Método que calcula el ritmo a partir de un tiempo en segundos y una distancia en millas devolviendo el resultado en km y millas
	objeto.paceInMiles = function(timeInSeconds, distanceInMiles){
		// Calculo el pace en millas
		var tiempoEnMinutos	= parseFloat(timeInSeconds/60);
		var paceEnMillas = parseFloat(tiempoEnMinutos/distanceInMiles);
		var paceSegundos = paceEnMillas*60;
		var timePaceMiles = this.secondsToTime(paceSegundos);
		// Calculo el pace en KM
		//var timePaceKm = this.paceInKm(timeInSeconds, this.metersToKm(this.milesToMeters(distanceInMiles)));
		var distanceInKm = this.metersToKm(this.milesToMeters(distanceInMiles));
		var paceEnKm = parseFloat(tiempoEnMinutos/distanceInKm);
		var paceSegundos = paceEnKm*60;
		var timePaceKm = this.secondsToTime(paceSegundos);
		// Y retorno los dos Time con el resultado
		return [timePaceKm, timePaceMiles];
	}
	// Aquí retorna el objeto
	return objeto;
})(Calculator || {});

