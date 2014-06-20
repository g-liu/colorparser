(function() {
String.prototype.toRGB = function(usePercents) {
	var _rgb = this.toRGBArray(usePercents);
	return rgb = {
		"r": _rgb[0],
		"g": _rgb[1],
		"b": _rgb[2]
	};
}

String.prototype.toRGBArray = function(usePercents) {
	var type = getType.call(this);
	var rgbArray = [-1, -1, -1];

	// convert from appropriate color space to RGB
	switch(type) {
		case 1: // RGB
			var rgb = this.match(/\d+((\.\d+)?%)?|\.\d+%/g);
			var asPercent = (rgb[0].charAt(rgb[0].length - 1) === "%")
			for(var i = 0; i < rgb.length; i++) {
				rgb[i] = parseInt(rgb[i], 10);
				if(asPercent && !usePercents) {
					rgb[i] = Math.round(rgb[i] * 2.55);
				}
				else if(!asPercent && !!usePercents) {
					rgb[i] /= 2.55;
				}
			}
			rgbArray = rgb.slice(0, 3);
			break;
		case 2: // HSL
			var hsl = this.match(/-?(\d+(\.\d+)?%?|\.\d+%?)/g);
			// normalize
			hsl[0] = ((parseFloat(hsl[0], 10) % 360) + 360) % 360;
			hsl[1] = Math.max(Math.min(100, parseFloat(hsl[1], 10)), 0) / 100;
			hsl[2] = Math.max(Math.min(100, parseFloat(hsl[2], 10)), 0) / 100;

			var chroma = (1 - Math.abs(2 * hsl[2] - 1)) * hsl[1];
			var _hue = hsl[0] / 60;
			var x = chroma * (1 - Math.abs(_hue % 2 - 1));
			var rgb = [0, 0, 0];
			switch(Math.floor(_hue)) {
				case 0: rgb = [chroma, x, 0]; break;
				case 1: rgb = [x, chroma, 0]; break;
				case 2: rgb = [0, chroma, x]; break;
				case 3: rgb = [0, x, chroma]; break;
				case 4: rgb = [x, 0, chroma]; break;
				case 5: rgb = [chroma, 0, x]; break;
				default: rgb = [0, 0, 0]; break;
			}
			for(var i = 0; i < rgb.length; i++) {
				rgbArray[i] = rgb[i] + (hsl[2] - 0.5 * chroma);
				if(!usePercents) {
					rgbArray[i] = Math.round(rgbArray[i] * 255);
				}
			}
			break;
		case 0: // HEX
		default: 
			var that = (this.charAt(0) === "#" ? this.substring(1) : this);
			if(that.length === 3) {
				that = that.charAt(0) + that.charAt(0) + that.charAt(1) + that.charAt(1) + that.charAt(2) + that.charAt(2);
			}
			var bigint = parseInt(that, 16);
			rgbArray[0] = ((bigint >> 16) & 255) / (!!usePercents ? 255 : 1);
			rgbArray[1] = ((bigint >> 8) & 255) / (!!usePercents ? 255 : 1);
			rgbArray[2] = (bigint & 255) / (!!usePercents ? 255 : 1);
			break;
	}

	return rgbArray;
}

String.prototype.toRGBString = function(usePercents) {
	if(!usePercents) {
		return "rgb(" + this.toRGBArray().join(",") + ")";
	}
	else {
		var values = this.toRGBArray();
		for(var i = 0; i < values.length; i++) {
			values *= 100;
			values += "%";
		}
		return "rgb(" + values.join(",") + ")";
	}
}

String.prototype.toHex = function() {
	var _h = this.toHexArray();
	return hex = {
		"r": _h[0],
		"g": _h[1],
		"b": _h[2]
	};
}

String.prototype.toHexArray = function() {
	var rgb = this.toRGBArray();
	var hexArray = [];
	for(var i = 0; i < rgb.length; i++) {
		hexArray[i] = ("00" + rgb[i].toString(16)).slice(-2);
	}

	return hexArray;
}

/**
 * @param {Boolean} prefix: whether to include the "#" prefix
 */
String.prototype.toHexString = function(prefix) {
	var pfx = (typeof prefix === 'undefined') ? "#" : "";
	return pfx + this.toHexArray().join("");
}

String.prototype.toHSL = function() {
	var _hsl = this.toHSLArray();
	return hsl = {
		"h": _hsl[0],
		"s": _hsl[1],
		"l": _hsl[2]
	};
}

String.prototype.toHSLArray = function() {
	var rgb = this.toRGBArray();
    var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max === min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h*360, s*100, l*100];
}

String.prototype.toHSLString = function() {
	var hsl = this.toHSLArray();
	return "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)";
}

/**
 * Retrieve the color unit being used
 * @param {String} color
 * @return ...
 */
function getType() {
	if(isHex.call(this)) {
		return 0;
	}
	else if(isRGB.call(this)) {
		return 1;
	}
	else if(isHSL.call(this)) {
		return 2;
	}
	else {
		throw("Not a color: '" + this + "' is not a color.");
	}
}

function isHex() {
	return this.match(/^#?[A-F0-9]{3}([A-F0-9]{3})?$/i);
}

function isRGB() {
	// preliminary "loose" regex match
	if(this.match(/^rgb\(\s*((\d+((\.\d+)?%)?|\.\d+%)\s*,\s*){2}(\d+((\.\d+)?%)?|\.\d+%)\s*\)$/i)) {
		// ^rgba?\(\s*((\d+((\.\d+)?%)?|\.\d+%)\s*,\s*){2}(\d+((\.\d+)?%)?|\.\d+%)\s*(,\s*\d*\.?\d+\s*)?\)$
		var nums = this.match(/\d+((\.\d+)?%)?|\.\d+%/gi);
		if(!nums || !nums.length || nums.length != 3) {
			return false;
		}

		// check format of each
		var usePercent = (nums[0].charAt(nums[0].length - 1) === "%");
		for(var i = 0; i < 3; i++) {
			var numInt = parseFloat(nums[i], 10);
			if(usePercent && (nums[i].charAt(nums[i].length - 1) !== "%" || numInt < 0 || numInt > 100)) {
				return false;
			}
			else if(!usePercent && nums[i].charAt(nums[i].length - 1) === "%" || numInt < 0 || numInt > 255) {
				return false;
			}
		}
		return true;
	}

	return false;
}

function isHSL() {
	// preliminary "loose" regex match
	if(this.match(/^hsl\(\s*-?(\d+(\.\d+)?|\.\d+)(\s*,\s*-?(\d+(\.\d+)?%|\.\d+%)){2}\s*\)$/i)) {
		// ^hsla?\(\s*-?(\d+(\.\d+)?|\.\d+)(\s*,\s*-?(\d+(\.\d+)?%|\.\d+%)){2}\s*(,\s*\d*\.?\d+\s*)?\)$
		var nums = this.match(/\d+(\.\d+)?%?|\.\d+%?/gi);
		if(!nums || !nums.length || nums.length !== 3) {
			return false;
		}

		// check first value (hue) separately
		if(nums[0].charAt(nums[0].length - 1) === "%") {
			return false;
		}
		for(var i = 1; i < 3; i++) {
			if(nums[i].charAt(nums[i].length - 1) !== "%") {
				return false;
			}
		}
		return true;
	}

	return false;
}

})();