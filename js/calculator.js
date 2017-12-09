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
		// ||| CONTENEDOR |||
		var interfaz = document.createElement('div');
		// titulo
		var titulo = document.createElement('h1');
		titulo.appendChild(document.createTextNode('Calculadora de carreras'));
		// ||| SECCIÓN RITMO |||
		var seccionRitmo = document.createElement('div');
		var tituloSeccionRitmo = document.createElement('h3');
		tituloSeccionRitmo.appendChild(document.createTextNode('Calcular el ritmo por km o milla:'));
		// - distancia
		var labelCampoDistanciaRitmo = document.createElement('label');
		labelCampoDistanciaRitmo.setAttribute('for', 'campoDistanciaRitmo');
		labelCampoDistanciaRitmo.appendChild(document.createTextNode('Distancia: '));
		var campoDistanciaRitmo = document.createElement('input');
		campoDistanciaRitmo.setAttribute('name', campoDistanciaRitmo);
		campoDistanciaRitmo.setAttribute('type', 'number');
		campoDistanciaRitmo.setAttribute('style', 'max-width: 6rem;');
		var selectorTipoDistanciaRitmo = document.createElement('select');
		var optSelectorTipoDistanciaRitmoKm = document.createElement('option');
		optSelectorTipoDistanciaRitmoKm.setAttribute('value', 'Km');
		optSelectorTipoDistanciaRitmoKm.appendChild(document.createTextNode('Kilómetros'));
		var optSelectorTipoDistanciaRitmoMi = document.createElement('option');
		optSelectorTipoDistanciaRitmoMi.setAttribute('value', 'Millas');
		optSelectorTipoDistanciaRitmoMi.appendChild(document.createTextNode('Millas'));
		selectorTipoDistanciaRitmo.appendChild(optSelectorTipoDistanciaRitmoKm);
		selectorTipoDistanciaRitmo.appendChild(optSelectorTipoDistanciaRitmoMi);
		// - tiempo
		var labelCampoTiempoRitmo = document.createElement('label');
		labelCampoTiempoRitmo.appendChild(document.createTextNode('Tiempo: '));
		var campoHoraTiempoRitmo = document.createElement('input');
		campoHoraTiempoRitmo.setAttribute('type', 'number');
		campoHoraTiempoRitmo.setAttribute('size', '2');
		campoHoraTiempoRitmo.setAttribute('min', '0');
		campoHoraTiempoRitmo.setAttribute('max', '99');
		campoHoraTiempoRitmo.setAttribute('placeholder', 'hh');
		campoHoraTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		var campoMinutoTiempoRitmo = document.createElement('input');
		campoMinutoTiempoRitmo.setAttribute('type', 'number');
		campoMinutoTiempoRitmo.setAttribute('size', '2');
		campoMinutoTiempoRitmo.setAttribute('maxlength', '2');
		campoMinutoTiempoRitmo.setAttribute('min', '0');
		campoMinutoTiempoRitmo.setAttribute('max', '59');
		campoMinutoTiempoRitmo.setAttribute('placeholder', 'mm');
		campoMinutoTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		var campoSegundoTiempoRitmo = document.createElement('input');
		campoSegundoTiempoRitmo.setAttribute('type', 'number');
		campoSegundoTiempoRitmo.setAttribute('size', '2');
		campoSegundoTiempoRitmo.setAttribute('maxlength', '2');
		campoSegundoTiempoRitmo.setAttribute('min', '0');
		campoSegundoTiempoRitmo.setAttribute('max', '59');
		campoSegundoTiempoRitmo.setAttribute('placeholder', 'ss');
		campoSegundoTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		// - submit
		var btCalcularRitmo = document.createElement('button');
		btCalcularRitmo.setAttribute('type', 'button');
		btCalcularRitmo.appendChild(document.createTextNode('Calcular ritmo'));
		// -  resultado
		var resultadoRitmo = document.createElement('div');
		var etiquetaResultadoRitmo = document.createElement('span');
		var textoEtiquetaResultadoRitmo = document.createTextNode('Tu ritmo por kilómetro: ');
		etiquetaResultadoRitmo.appendChild(textoEtiquetaResultadoRitmo);
		resultadoRitmo.appendChild(etiquetaResultadoRitmo);
		// - Añado los elementos a la seccionRitmo
		seccionRitmo.appendChild(tituloSeccionRitmo);
		//-
		seccionRitmo.appendChild(labelCampoDistanciaRitmo);
		seccionRitmo.appendChild(campoDistanciaRitmo);
		seccionRitmo.appendChild(document.createTextNode(' ')); // &nbsp;
		seccionRitmo.appendChild(selectorTipoDistanciaRitmo);
		seccionRitmo.appendChild(document.createElement('br'));
		// -
		seccionRitmo.appendChild(labelCampoTiempoRitmo);
		seccionRitmo.appendChild(campoHoraTiempoRitmo);
		seccionRitmo.appendChild(document.createTextNode(':'));
		seccionRitmo.appendChild(campoMinutoTiempoRitmo);
		seccionRitmo.appendChild(document.createTextNode(':'));
		seccionRitmo.appendChild(campoSegundoTiempoRitmo);
		seccionRitmo.appendChild(document.createElement('br'));
		// -
		seccionRitmo.appendChild(btCalcularRitmo);
		// - 
		seccionRitmo.appendChild(resultadoRitmo);
		

		// ||| SECCIÓN TIEMPOS |||
		var seccionTiempos = document.createElement('div');
		var tituloSeccionTiempos = document.createElement('h3');
		tituloSeccionTiempos.appendChild(document.createTextNode('Calcular tiempos:'));
		// - distancia total
		var labelCampoDistanciaTotalTiempos = document.createElement('label');
		labelCampoDistanciaTotalTiempos.appendChild(document.createTextNode('Distancia total: '));
		var campoDistanciaTotalTiempos = document.createElement('input');
		campoDistanciaTotalTiempos.setAttribute('type', 'number');
		campoDistanciaTotalTiempos.setAttribute('name', campoDistanciaTotalTiempos);
		campoDistanciaTotalTiempos.setAttribute('style', 'max-width: 6rem;');
		var selectorTipoDistanciaTiempos = document.createElement('select');
		var optselectorTipoDistanciaTiemposKm = document.createElement('option');
		optselectorTipoDistanciaTiemposKm.setAttribute('value', 'Km');
		optselectorTipoDistanciaTiemposKm.appendChild(document.createTextNode('Kilómetros'));
		var optselectorTipoDistanciaTiemposMi = document.createElement('option');
		optselectorTipoDistanciaTiemposMi.setAttribute('value', 'Millas');
		optselectorTipoDistanciaTiemposMi.appendChild(document.createTextNode('Millas'));
		selectorTipoDistanciaTiempos.appendChild(optselectorTipoDistanciaTiemposKm);
		selectorTipoDistanciaTiempos.appendChild(optselectorTipoDistanciaTiemposMi);
		// - ritmo
		var labelCampoRitmoTiempos = document.createElement('label');
		labelCampoRitmoTiemposTexto = document.createTextNode('Tu ritmo por kilómetro: ');
		labelCampoRitmoTiempos.appendChild(labelCampoRitmoTiemposTexto);
		var campoHoraRitmoTiempos = document.createElement('input');
		campoHoraRitmoTiempos.setAttribute('type', 'number');
		campoHoraRitmoTiempos.setAttribute('size', '2');
		campoHoraRitmoTiempos.setAttribute('min', '0');
		campoHoraRitmoTiempos.setAttribute('max', '99');
		campoHoraRitmoTiempos.setAttribute('placeholder', 'hh');
		campoHoraRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		var campoMinutoRitmoTiempos = document.createElement('input');
		campoMinutoRitmoTiempos.setAttribute('type', 'number');
		campoMinutoRitmoTiempos.setAttribute('size', '2');
		campoMinutoRitmoTiempos.setAttribute('min', '0');
		campoMinutoRitmoTiempos.setAttribute('max', '59');
		campoMinutoRitmoTiempos.setAttribute('placeholder', 'mm');
		campoMinutoRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		var campoSegundoRitmoTiempos = document.createElement('input');
		campoSegundoRitmoTiempos.setAttribute('type', 'number');
		campoSegundoRitmoTiempos.setAttribute('size', '2');
		campoSegundoRitmoTiempos.setAttribute('min', '0');
		campoSegundoRitmoTiempos.setAttribute('max', '59');
		campoSegundoRitmoTiempos.setAttribute('placeholder', 'ss');
		campoSegundoRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		// - distancia corte
		var labelCampoCorteTiempos = document.createElement('label');
		var labelCampoCorteTiemposTexto = document.createTextNode('Distancia de corte en metros: ');
		labelCampoCorteTiempos.appendChild(labelCampoCorteTiemposTexto);
		var campoCorteTiempos = document.createElement('input');
		campoCorteTiempos.setAttribute('style', 'max-width: 6rem;');
		campoCorteTiempos.setAttribute('type', 'number');
		// - submit
		var btCalcularTiempos = document.createElement('button');
		btCalcularTiempos.setAttribute('type', 'button');
		btCalcularTiempos.appendChild(document.createTextNode('Calcular tiempos'));
		// - resultado
		var resultadoTiempos = document.createElement('div');

		// - > Añado los elementos a la seccionTiempos
		seccionTiempos.appendChild(tituloSeccionTiempos);
		seccionTiempos.appendChild(labelCampoDistanciaTotalTiempos);
		seccionTiempos.appendChild(campoDistanciaTotalTiempos);
		seccionTiempos.appendChild(document.createTextNode(" "));
		seccionTiempos.appendChild(selectorTipoDistanciaTiempos);
		seccionTiempos.appendChild(document.createElement('br'));
		// -
		seccionTiempos.appendChild(labelCampoRitmoTiempos);
		seccionTiempos.appendChild(campoHoraRitmoTiempos);
		seccionTiempos.appendChild(document.createTextNode(':'));
		seccionTiempos.appendChild(campoMinutoRitmoTiempos);
		seccionTiempos.appendChild(document.createTextNode(':'));
		seccionTiempos.appendChild(campoSegundoRitmoTiempos);
		seccionTiempos.appendChild(document.createElement('br'));
		// -
		seccionTiempos.appendChild(labelCampoCorteTiempos);
		seccionTiempos.appendChild(campoCorteTiempos);
		seccionTiempos.appendChild(document.createElement('br'));
		// -
		seccionTiempos.appendChild(btCalcularTiempos);
		// -
		seccionTiempos.appendChild(resultadoTiempos);

		// INSERTO LOS ELEMENTOS EN EL ELEMENTO PRINCIPAL 'INTERFAZ'
		interfaz.appendChild(titulo);
		interfaz.appendChild(seccionRitmo);
		interfaz.appendChild(seccionTiempos);
		// RETORNO EL ELEMENTO INTERFAZ COMPLETO
		return interfaz;
	}

	// Método que calcula el "pace" a partir de un tiempo en segundos y una distancia en km devolviendo el resultado en km y en millas
	/**
	* [paceInKm calcula el ritmo de carrera por kilometro y milla a
	partir del tiempo en segundos realizado y la distancia recorrida en
	kilometros]
	* @param {number} timeInSeconds
	* @param {number} distanceInKm
	* @return {[time,time]} [devuelve un array con el ritmo por
	kilometro y ritmo por milla]
	*/
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
	/**
	* [paceInMiles calcula el ritmo de carrera por kilometro y milla a
	partir del tiempo en segundos realizado y la distancia recorrida en
	millas]
	* @param {number} timeInSeconds
	* @param {number} distanceInMiles
	* @return {[time,time]} [devuelve un array con el ritmo por
	kilometro y ritmo por milla]
	*/
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

	// Método para calcular la marca en kilómetros
	/**
	* [markFromPacePerKm: calcula la marca esperada al recorrer la
	distancia en kilometros al ritmo de carrera por kilometro realizado]
	* @param {time} pacePerKm
	* @param {number} distanceInMeters
	* @return {time} [devuelve el tiempo/marca esperado]
	*/
	objeto.markFromPacePerKm = function(pacePerKm, distanceInMeters) {
		var distanciaEnKm = this.metersToKm(distanceInMeters);
		var ritmoEnSegundos = this.timeToSeconds(pacePerKm);
		var marcaEnSegundos = ritmoEnSegundos * distanciaEnKm;
		var markTime = this.secondsToTime(marcaEnSegundos);
		return markTime;
	}

	// Método para calcular la marca en millas
	/**
	* [markFromPacePerMile: calcula la marca esperada al recorrer la
	distancia en millas al ritmo de carrera por milla realizado]
	* @param {time} pacePerMile
	* @param {imperial} distanceInImperial
	* @return {time} [devuelve el tiempo/marca esperado]
	*/
	objeto.markFromPacePerMile = function(pacePerMile, distanceInImperial){
		var distanciaEnMillas = this.imperialToMiles(distanceInImperial);
		var ritmoEnSegundos = this.timeToSeconds(pacePerMile);
		var marcaEnSegundos = ritmoEnSegundos * distanciaEnMillas;
		var markTime = this.secondsToTime(marcaEnSegundos);
		return markTime;
	}

	/**
	* [tableTimeFromPacePerKm: calcula la marca esperada al recorrer la
	distancia en metros al ritmo de carrera por kilometro cada
	cutDistanceInMeters]
	* @param {time} pacePerKm
	* @param {number} distanceInMeters
	* @param {number} cutDistanceInMeters
	* @return {time} [devuelve un array de objetos con propiedades
	distance=distanciaIntermedia mark=tiempo de paso en la distancia
	intermedia]
	*/
	objeto.tableTimeFromPacePerKm = function(pacePerKm, distanceInMeters, cutDistanceInMeters){
		var arrayMarcas = [];
		// Genera una marca por cada punto de corte durante el recorrido a la distancia
		for (var distanciaAcumulada=0; distanciaAcumulada<=distanceInMeters; distanciaAcumulada += cutDistanceInMeters){
			var distance = distanciaAcumulada;
			var mark = this.markFromPacePerKm(pacePerKm[0], distanciaAcumulada);
			obj = {
				distance: distance,
				mark: mark
			}
			arrayMarcas.push(obj);
		}
		// Y genera una última marca con la posición final
		var distance = distanceInMeters;
		var mark = this.markFromPacePerKm(pacePerKm[0], distanceInMeters);
		obj = {
			distance: distance,
			mark: mark
		}
		arrayMarcas.push(obj);
		return arrayMarcas;
	}

	/**
	* [tableTimeFromPacePerMile: calcula la marca esperada al recorrer
	la distancia en millas al ritmo de carrera por milla cada
	cutDistanceInYards]
	* @param {time} pacePerMile
	* @param {number} distanceInMiles
	* @param {number} cutDistanceInYards
	* @return {time} [devuelve un array de objetos con propiedades
	distance=distanciaIntermediaImperial mark=tiempo de paso en la
	distancia intermedia]
	*/
	objeto.tableTimeFromPacePerMile = function(pacePerMile, distanceInMiles, cutDistanceInYards){
		var arrayMarcas = [];
		var cutDistanceInMiles = this.imperialToMiles(this.yardsToImperial(cutDistanceInYards));
		// Genera una marca por cada punto de corte durante el recorrido a la distancia
		for (var distanciaAcumulada=0; distanciaAcumulada<=distanceInMiles; distanciaAcumulada += cutDistanceInMiles){
			var distance = distanciaAcumulada;
			var acumuladaImperial = this.milesToImperial(distanciaAcumulada);
			var mark = this.markFromPacePerMile(pacePerMile[1], acumuladaImperial);
			obj = {
				distance: this.milesToImperial(distance),
				mark: mark
			}
			arrayMarcas.push(obj);
		}
		// Y genera una última marca con la posición final
		var distance = this.milesToImperial(distance);
		var mark = this.markFromPacePerMile(pacePerMile[1], distance);
		obj = {
			distance: distance,
			mark: mark
		}
		arrayMarcas.push(obj);
		return arrayMarcas;

	}

	// Aquí retorna el objeto
	return objeto;
})(Calculator || {});

