// Submodulo distanceConverter para calculator.js
var Calculator = (function(objeto){
	
	// kmToMeters
	objeto.kmToMeters = function(km){
		return parseFloat((km*1000));
	}
	// metersToKm
	objeto.metersToKm = function(meters){
		return parseFloat((meters/100));
	}
	
	// metersToMiles
	objeto.metersToMiles = function(meters){
		return parseFloat((meters*0.000621371));
	}

	// milesToMeters
	objeto.milesToMeters = function(miles) {
		return parseFloat((miles*1609.344));
	}

	// milesToImperial
	objeto.milesToImperial = function(miles){
		var totalPies = miles * 5280
		var convertedMiles = Math.floor(totalPies/5280);
		var resto = totalPies%5280;
		var convertedYards = Math.floor(resto/3);
		resto = resto%3;
		var convertedFeets = parseFloat(resto);
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
		var convertedFeets = parseFloat(resto);
		var imperial = new objeto.Imperial(convertedMiles, convertedYards, convertedFeets);
		return imperial;	
	}

	// imperialToMiles
	objeto.imperialToMiles = function(imperial){
		var total = 0;
		total += imperial.miles;
		total += imperial.yards/1760;
		total += imperial.feet/5280;
		return parseFloat(total);
	}

	// 

	// Devuelve objeto con los nuevos métodos que aporta el submódulo
	return objeto;
})(Calculator || {});