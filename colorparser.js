String.prototype.toRGB = function() {
	var rgb = {
		"r": 0,
		"g": 0,
		"b": 0
	};

	// TODO: Implement conversion

	return rgb;
}

String.prototype.toRGBArray = function() {
	var rgbArray = [0, 0, 0];

	// TODO: Implement conversion

	return rgbArray;
}

String.prototype.toRGBString = function() {
	var rgbStringStart = "rgb(";
	var rgbStringEnd = ")";

	return rgbStringStart + this.toRGBArray().join(",") + rgbStringEnd;
}

String.prototype.toHex = function() {
	var hex = {
		"r": "00",
		"g": "00",
		"b": "00"
	};

	// TODO: Implement conversion

	return hex;

}

String.prototype.toHexArray = function() {
	var hexArray = ["00", "00", "00"];

	// TODO: Implement conversion

	return hexArray;
}

/**
 * @param {Boolean} prefix: whether to include the "#" prefix
 */
String.prototype.toHexString = function(prefix) {
	var pfx = prefix ? "#" : "";
	return pfx + this.toHexArray().join();
}

String.prototype.toHSL = function() {
	var hsl = {
		"h": 0,
		"s": 0,
		"l": 0
	};

	// TODO: Implement conversion

	return hsl;
}

String.prototype.toHSLArray = function() {
	var hslArray = [0, 0, 0];

	// TODO: Implement conversion

	return hslArray;
}

String.prototype.toHSLString = function() {
	var hslStringStart = "hsl(";
	var hslStringEnd = ")";

	return hslStringStart + this.toHSLArray().join(",") + hslStringEnd;
}

/**
 * Retrieve the color unit being used
 * @param {String} color
 * @return ...
 */
function getType(color) {
	if(color.match(/^#?[A-F0-9]{3}([A-F0-9]{3})?$/i)) {
		return 0; // hex
	}
	if(color.match(/^rgb\(*\)$/i)) { // TODO
		return 1; // rgb
	}
	if(color.match(/^hsl\(*\)$/i)) { //TODO
		return 2; // hsl
	}
}
