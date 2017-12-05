// Submodulo distanceConverter para calculator.js
var Calculator = (function(objeto){
	
	// kmToMeters
	objeto.kmToMeters = function(km){
		return km * 100;
	}
	// metersToKm
	objeto.metersToKm = function(meters){
		return meters / 100;
	}
	
	// metersToMiles
	objeto.metersToMiles = function(meters){
		return meters/1609.344;
	}

	// milesToMeters
	objeto.milesToMeters = function(miles) {
		return miles*1609.344;
	}

	// milesToImperial
	objeto.milesToImperial = function(miles){
		var totalPies = miles * 5280
		var convertedMiles = Math.floor(totalPies/5280);
		var resto = totalPies%5280;
		var convertedYards = Math.floor(resto/3);
		resto = resto%3;
		var convertedFeets = parseFloat(resto.toFixed(2));
		var imperial = new objeto.Imperial(convertedMiles, convertedYards, convertedFeets);
		return imperial;
	}

	// yardsToImperial
	objeto.yardsToImperial = function(yards){
		var totalPies = yards * 3;
		var convertedMiles = Math.floor(totalPies/5280);
		var resto = totalPies%5280;
		var convertedYards = Math.floor(resto/3);
		resto = resto%3;
		var convertedFeets = parseFloat(resto.toFixed(2));
		var imperial = new objeto.Imperial(convertedMiles, convertedYards, convertedFeets);
		return imperial;	
	}

	// Devuelve objeto con los nuevos métodos que aporta el submódulo
	return objeto;
})(Calculator || {});