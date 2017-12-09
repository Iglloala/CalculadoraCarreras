// MÓDULO Calculator
var Calculator = (function(objeto){

	// Clase GUI
	objeto.GUI = function(){
		// CREO LOS ELEMENTOS:
		// ||| CONTENEDOR |||
		this.contenedor = document.createElement('div');
		// titulo
		this.titulo = document.createElement('h1');
		this.titulo.appendChild(document.createTextNode('Calculadora de carreras'));
		// ||| SECCIÓN RITMO |||
		this.seccionRitmo = document.createElement('div');
		this.tituloSeccionRitmo = document.createElement('h3');
		this.tituloSeccionRitmo.appendChild(document.createTextNode('Calcular el ritmo por km o milla:'));
		// - distancia
		this.labelCampoDistanciaRitmo = document.createElement('label');
		this.labelCampoDistanciaRitmo.setAttribute('for', 'campoDistanciaRitmo');
		this.labelCampoDistanciaRitmo.appendChild(document.createTextNode('Distancia: '));
		this.campoDistanciaRitmo = document.createElement('input');
		this.campoDistanciaRitmo.setAttribute('name', 'campoDistanciaRitmo');
		this.campoDistanciaRitmo.setAttribute('type', 'number');
		this.campoDistanciaRitmo.setAttribute('style', 'max-width: 6rem;');
		this.selectorTipoDistanciaRitmo = document.createElement('select');
		this.optSelectorTipoDistanciaRitmoKm = document.createElement('option');
		this.optSelectorTipoDistanciaRitmoKm.setAttribute('value', 'Kilómetros');
		this.optSelectorTipoDistanciaRitmoKm.appendChild(document.createTextNode('Kilómetros'));
		this.optSelectorTipoDistanciaRitmoMi = document.createElement('option');
		this.optSelectorTipoDistanciaRitmoMi.setAttribute('value', 'Millas');
		this.optSelectorTipoDistanciaRitmoMi.appendChild(document.createTextNode('Millas'));
		this.selectorTipoDistanciaRitmo.appendChild(this.optSelectorTipoDistanciaRitmoKm);
		this.selectorTipoDistanciaRitmo.appendChild(this.optSelectorTipoDistanciaRitmoMi);
		// - tiempo
		this.labelCampoTiempoRitmo = document.createElement('label');
		this.labelCampoTiempoRitmo.appendChild(document.createTextNode('Tiempo: '));
		this.campoHoraTiempoRitmo = document.createElement('input');
		this.campoHoraTiempoRitmo.setAttribute('type', 'number');
		this.campoHoraTiempoRitmo.setAttribute('size', '2');
		this.campoHoraTiempoRitmo.setAttribute('min', '0');
		this.campoHoraTiempoRitmo.setAttribute('max', '99');
		this.campoHoraTiempoRitmo.setAttribute('placeholder', 'hh');
		this.campoHoraTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		this.campoMinutoTiempoRitmo = document.createElement('input');
		this.campoMinutoTiempoRitmo.setAttribute('type', 'number');
		this.campoMinutoTiempoRitmo.setAttribute('size', '2');
		this.campoMinutoTiempoRitmo.setAttribute('maxlength', '2');
		this.campoMinutoTiempoRitmo.setAttribute('min', '0');
		this.campoMinutoTiempoRitmo.setAttribute('max', '59');
		this.campoMinutoTiempoRitmo.setAttribute('placeholder', 'mm');
		this.campoMinutoTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		this.campoSegundoTiempoRitmo = document.createElement('input');
		this.campoSegundoTiempoRitmo.setAttribute('type', 'number');
		this.campoSegundoTiempoRitmo.setAttribute('size', '2');
		this.campoSegundoTiempoRitmo.setAttribute('maxlength', '2');
		this.campoSegundoTiempoRitmo.setAttribute('min', '0');
		this.campoSegundoTiempoRitmo.setAttribute('max', '59');
		this.campoSegundoTiempoRitmo.setAttribute('placeholder', 'ss');
		this.campoSegundoTiempoRitmo.setAttribute('style', 'max-width: 2rem;');
		// - submit
		this.btCalcularRitmo = document.createElement('button');
		this.btCalcularRitmo.setAttribute('type', 'button');
		this.btCalcularRitmo.appendChild(document.createTextNode('Calcular ritmo'));
		// -  resultado
		this.resultadoRitmo = document.createElement('div');
		this.etiquetaResultadoRitmo = document.createElement('span');
		this.textoEtiquetaResultadoRitmo = document.createTextNode('Tu ritmo por kilómetro: ');
		this.etiquetaResultadoRitmo.appendChild(this.textoEtiquetaResultadoRitmo);
		this.resultadoRitmo.appendChild(this.etiquetaResultadoRitmo);
		// - Añado los elementos a la seccionRitmo
		this.seccionRitmo.appendChild(this.tituloSeccionRitmo);
		//-
		this.seccionRitmo.appendChild(this.labelCampoDistanciaRitmo);
		this.seccionRitmo.appendChild(this.campoDistanciaRitmo);
		this.seccionRitmo.appendChild(document.createTextNode(' ')); // &nbsp;
		this.seccionRitmo.appendChild(this.selectorTipoDistanciaRitmo);
		this.seccionRitmo.appendChild(document.createElement('br'));
		// -
		this.seccionRitmo.appendChild(this.labelCampoTiempoRitmo);
		this.seccionRitmo.appendChild(this.campoHoraTiempoRitmo);
		this.seccionRitmo.appendChild(document.createTextNode(':'));
		this.seccionRitmo.appendChild(this.campoMinutoTiempoRitmo);
		this.seccionRitmo.appendChild(document.createTextNode(':'));
		this.seccionRitmo.appendChild(this.campoSegundoTiempoRitmo);
		this.seccionRitmo.appendChild(document.createElement('br'));
		// -
		this.seccionRitmo.appendChild(this.btCalcularRitmo);
		// - 
		this.seccionRitmo.appendChild(this.resultadoRitmo);
		

		// ||| SECCIÓN TIEMPOS |||
		this.seccionTiempos = document.createElement('div');
		this.tituloSeccionTiempos = document.createElement('h3');
		this.tituloSeccionTiempos.appendChild(document.createTextNode('Calcular tiempos:'));
		// - distancia total
		this.labelCampoDistanciaTotalTiempos = document.createElement('label');
		this.labelCampoDistanciaTotalTiempos.appendChild(document.createTextNode('Distancia total: '));
		this.campoDistanciaTotalTiempos = document.createElement('input');
		this.campoDistanciaTotalTiempos.setAttribute('type', 'number');
		this.campoDistanciaTotalTiempos.setAttribute('name', 'campoDistanciaTotalTiempos');
		this.campoDistanciaTotalTiempos.setAttribute('style', 'max-width: 6rem;');
		this.selectorTipoDistanciaTiempos = document.createElement('select');
		this.optselectorTipoDistanciaTiemposKm = document.createElement('option');
		this.optselectorTipoDistanciaTiemposKm.setAttribute('value', 'Kilómetros');
		this.optselectorTipoDistanciaTiemposKm.appendChild(document.createTextNode('Kilómetros'));
		this.optselectorTipoDistanciaTiemposMi = document.createElement('option');
		this.optselectorTipoDistanciaTiemposMi.setAttribute('value', 'Millas');
		this.optselectorTipoDistanciaTiemposMi.appendChild(document.createTextNode('Millas'));
		this.selectorTipoDistanciaTiempos.appendChild(this.optselectorTipoDistanciaTiemposKm);
		this.selectorTipoDistanciaTiempos.appendChild(this.optselectorTipoDistanciaTiemposMi);
		// - ritmo
		this.labelCampoRitmoTiempos = document.createElement('label');
		this.labelCampoRitmoTiemposTexto = document.createTextNode('Tu ritmo por kilómetro: ');
		this.labelCampoRitmoTiempos.appendChild(this.labelCampoRitmoTiemposTexto);
		this.campoHoraRitmoTiempos = document.createElement('input');
		this.campoHoraRitmoTiempos.setAttribute('type', 'number');
		this.campoHoraRitmoTiempos.setAttribute('size', '2');
		this.campoHoraRitmoTiempos.setAttribute('min', '0');
		this.campoHoraRitmoTiempos.setAttribute('max', '99');
		this.campoHoraRitmoTiempos.setAttribute('placeholder', 'hh');
		this.campoHoraRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		this.campoMinutoRitmoTiempos = document.createElement('input');
		this.campoMinutoRitmoTiempos.setAttribute('type', 'number');
		this.campoMinutoRitmoTiempos.setAttribute('size', '2');
		this.campoMinutoRitmoTiempos.setAttribute('min', '0');
		this.campoMinutoRitmoTiempos.setAttribute('max', '59');
		this.campoMinutoRitmoTiempos.setAttribute('placeholder', 'mm');
		this.campoMinutoRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		this.campoSegundoRitmoTiempos = document.createElement('input');
		this.campoSegundoRitmoTiempos.setAttribute('type', 'number');
		this.campoSegundoRitmoTiempos.setAttribute('size', '2');
		this.campoSegundoRitmoTiempos.setAttribute('min', '0');
		this.campoSegundoRitmoTiempos.setAttribute('max', '59');
		this.campoSegundoRitmoTiempos.setAttribute('placeholder', 'ss');
		this.campoSegundoRitmoTiempos.setAttribute('style', 'max-width: 2rem;');
		// - distancia corte
		this.labelCampoCorteTiempos = document.createElement('label');
		this.labelCampoCorteTiemposTexto = document.createTextNode('Distancia de corte en metros: ');
		this.labelCampoCorteTiempos.appendChild(this.labelCampoCorteTiemposTexto);
		this.campoCorteTiempos = document.createElement('input');
		this.campoCorteTiempos.setAttribute('style', 'max-width: 6rem;');
		this.campoCorteTiempos.setAttribute('type', 'number');
		// - submit
		this.btCalcularTiempos = document.createElement('button');
		this.btCalcularTiempos.setAttribute('type', 'button');
		this.btCalcularTiempos.appendChild(document.createTextNode('Calcular tiempos'));
		// - resultado
		this.resultadoTiempos = document.createElement('div');

		// - > Añado los elementos a la seccionTiempos
		this.seccionTiempos.appendChild(this.tituloSeccionTiempos);
		this.seccionTiempos.appendChild(this.labelCampoDistanciaTotalTiempos);
		this.seccionTiempos.appendChild(this.campoDistanciaTotalTiempos);
		this.seccionTiempos.appendChild(document.createTextNode(" "));
		this.seccionTiempos.appendChild(this.selectorTipoDistanciaTiempos);
		this.seccionTiempos.appendChild(document.createElement('br'));
		// -
		this.seccionTiempos.appendChild(this.labelCampoRitmoTiempos);
		this.seccionTiempos.appendChild(this.campoHoraRitmoTiempos);
		this.seccionTiempos.appendChild(document.createTextNode(':'));
		this.seccionTiempos.appendChild(this.campoMinutoRitmoTiempos);
		this.seccionTiempos.appendChild(document.createTextNode(':'));
		this.seccionTiempos.appendChild(this.campoSegundoRitmoTiempos);
		this.seccionTiempos.appendChild(document.createElement('br'));
		// -
		this.seccionTiempos.appendChild(this.labelCampoCorteTiempos);
		this.seccionTiempos.appendChild(this.campoCorteTiempos);
		this.seccionTiempos.appendChild(document.createElement('br'));
		// -
		this.seccionTiempos.appendChild(this.btCalcularTiempos);
		// -
		this.seccionTiempos.appendChild(this.resultadoTiempos);

		// INSERTO LOS ELEMENTOS EN EL ELEMENTO PRINCIPAL 'contenedor'
		this.contenedor.appendChild(this.titulo);
		this.contenedor.appendChild(this.seccionRitmo);
		this.contenedor.appendChild(this.seccionTiempos);
	}
	

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

	// GENERO UNA INSTANCIA DE LA INTERFAZ
	objeto.interfaz = new objeto.GUI();
	// LE AÑADO LOS EVENTOS QUE CORRESPONDA
	// (EH) Evento para cambio de unidades en distancia ritmo
	objeto.interfaz.selectorTipoDistanciaRitmo.interfaz = objeto.interfaz;
	objeto.interfaz.selectorTipoDistanciaRitmo.addEventListener('change', function(evento){
		var actual = this.value;
		switch (actual) {
			case 'Millas':
				this.interfaz.etiquetaResultadoRitmo.innerHTML = "Tu ritmo por milla: ";
				break;
			case 'Kilómetros':
				this.interfaz.etiquetaResultadoRitmo.innerHTML = "Tu ritmo por kilómetro: ";
				break;
			default:
				// Por defecto nada
				break;
		}
	});
	// (EH) Evento para el cálculo del resultado en btCalcularRitmo
	objeto.interfaz.btCalcularRitmo.interfaz = objeto.interfaz;
	objeto.interfaz.btCalcularRitmo.addEventListener('click', function(){
		// Recoge los datos necesarios
		var distancia = this.interfaz.campoDistanciaRitmo.value;
		var horas = this.interfaz.campoHoraTiempoRitmo.value || 0;
		var minutos = this.interfaz.campoMinutoTiempoRitmo.value || 0;
		var segundos = this.interfaz.campoSegundoTiempoRitmo.value || 0;
		var tiempo = new objeto.Time(horas, minutos, segundos);
		var tipo = this.interfaz.selectorTipoDistanciaRitmo.value;
		// Caclula el resultado según el tipo de datos introducidos
		var salida = "";
		switch (tipo) {
			case 'Kilómetros':
				var resultado = objeto.paceInKm(objeto.timeToSeconds(tiempo), distancia);
				salida += "Tu ritmo por kilómetro: ";
				salida += resultado[0].hours+" horas, "+resultado[0].minutes+" minutos, "+resultado[0].seconds+" segundos.";
				break;
			case 'Millas':
				var resultado = objeto.paceInMiles(objeto.timeToSeconds(tiempo), distancia); 
				salida += "Tu ritmo por milla: ";
				salida += resultado[1].hours+" horas, "+resultado[1].minutes+" minutos, "+resultado[1].seconds+" segundos.";
				break;
			default:
				// por defecto nada
				break;
		}
		
		// Muestra el resultado
		this.interfaz.etiquetaResultadoRitmo.innerHTML = salida;
	});
	// (EH) Evento para cambiar de unidades de distancia en tiempos
	objeto.interfaz.selectorTipoDistanciaTiempos.interfaz = objeto.interfaz;
	objeto.interfaz.selectorTipoDistanciaTiempos.addEventListener('change', function(){
		var actual = this.value;
		switch (actual) {
			case 'Millas':
				this.interfaz.labelCampoRitmoTiempos.innerHTML = "Tu ritmo por milla: ";
				this.interfaz.labelCampoCorteTiempos.innerHTML = "Distancia de corte en yardas: ";
				break;
			case 'Kilómetros':
				this.interfaz.labelCampoRitmoTiempos.innerHTML = "Tu ritmo por kilómetro: ";
				this.interfaz.labelCampoCorteTiempos.innerHTML = "Distancia de corte en metros: ";
				break;
			default:
				// Por defecto nada
				break;
		}
	});
	// (EH) Evento para el cálculo del resultado en btCalcularTiempos
	objeto.interfaz.btCalcularTiempos.interfaz = objeto.interfaz;
	objeto.interfaz.btCalcularTiempos.addEventListener('click', function(){
		// Recojo los datos
		var tipo = this.interfaz.selectorTipoDistanciaTiempos.value;
		var distanciaTotal = this.interfaz.campoDistanciaTotalTiempos.value;
		var horas = this.interfaz.campoHoraRitmoTiempos.value || 0;
		var minutos = this.interfaz.campoMinutoRitmoTiempos.value || 0;
		var segundos = this.interfaz.campoSegundoRitmoTiempos.value || 0;
		var tiempo = new objeto.Time(horas, minutos, segundos);
		var distanciaCorte = this.interfaz.campoCorteTiempos.value || 1;
		// Empiezo a construir la salida
		var tablaResultados = document.createElement('table');
		var filaCabeceraResultados = document.createElement('tr');
		var celdaCabeceraCorte = document.createElement('td');
		celdaCabeceraCorte.appendChild(document.createTextNode('Corte'));
		var celdaCabeceraDistanciaAcumulada = document.createElement('td');
		celdaCabeceraDistanciaAcumulada.appendChild(document.createTextNode('Distancia Acumulada'));
		var celdaCabeceraTiempo = document.createElement('td');
		celdaCabeceraTiempo.appendChild(document.createTextNode('Tiempo'));
		filaCabeceraResultados.appendChild(celdaCabeceraCorte);
		filaCabeceraResultados.appendChild(celdaCabeceraDistanciaAcumulada);
		filaCabeceraResultados.appendChild(celdaCabeceraTiempo);
		tablaResultados.appendChild(filaCabeceraResultados);
		// Calculo el resultado
		switch (tipo) {
			case "Kilómetros":
			resultado = objeto.tableTimeFromPacePerKm(tiempo, distanciaTotal*1000, distanciaCorte*1);
			break;
			case "Millas":
			resultado = objeto.tableTimeFromPacePerMile(tiempo, distanciaTotal, distanciaCorte*1);
			break;
			default: 
			// No hace nada
		}
		// Genera las filas
		for (var i=0; i<resultado.length; i++){
			var distance = resultado[i].distance;
			var mark = resultado[i].mark;
			var corte = i;
			var distanciaAcumulada = distance;
			switch (tipo) {
				case 'Kilómetros':
				var distanciaAcumulada = distance;
				break;
				case 'Millas':
				var distanciaAcumulada = objeto.imperialToMiles(distance)*1760;
				break;
				default:
				//No hace nada
			}
			var tiempo = mark.hours+" horas, "+mark.minutes+" minutos, "+mark.seconds+" segundos.";
			// - 
			var filaRegistroResultado = document.createElement('tr');
			var celdaRegistroCorte = document.createElement('td');
			celdaRegistroCorte.appendChild(document.createTextNode(corte));
			var celdaRegistroDistanciaAcumulada = document.createElement('td');
			celdaRegistroDistanciaAcumulada.appendChild(document.createTextNode(distanciaAcumulada));
			var celdaRegistroTiempo = document.createElement('td');
			celdaRegistroTiempo.appendChild(document.createTextNode(tiempo));
			filaRegistroResultado.appendChild(celdaRegistroCorte);
			filaRegistroResultado.appendChild(celdaRegistroDistanciaAcumulada);
			filaRegistroResultado.appendChild(celdaRegistroTiempo);
			//-
			tablaResultados.appendChild(filaRegistroResultado);
		}
		// Añado la tabla al campo de resultados
		objeto.interfaz.resultadoTiempos.innerHTML = "";
		objeto.interfaz.resultadoTiempos.appendChild(tablaResultados);
	});

	// Método público show()
	objeto.show = function(){
		// RETORNO EL ELEMENTO INTERFAZ COMPLETO
		return objeto.interfaz.contenedor;
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
			var mark = this.markFromPacePerKm(pacePerKm, distanciaAcumulada);
			obj = {
				distance: distance,
				mark: mark
			}
			arrayMarcas.push(obj);
		}
		// Y genera una última marca con la posición final
		var distance = distanceInMeters;
		var mark = this.markFromPacePerKm(pacePerKm, distanceInMeters);
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
			var mark = this.markFromPacePerMile(pacePerMile, acumuladaImperial);
			obj = {
				distance: this.milesToImperial(distance),
				mark: mark
			}
			arrayMarcas.push(obj);
		}
		// Y genera una última marca con la posición final
		var distance = this.milesToImperial(distance);
		var mark = this.markFromPacePerMile(pacePerMile, distance);
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

