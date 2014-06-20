(function() {
String.prototype.trim = String.prototype.trim || function trim() { return this.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); };

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
		case 3: // Named
			var hexVal = NAMED_TO_HEX[this.trim()];
		case 0: // HEX
		default: 
			var hexVal = padHex(typeof hexVal === "undefined" ? this : hexVal);
			var bigint = parseInt(hexVal, 16);
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

String.prototype.toNamed = function() {
	return HEX_TO_NAMED[this.trim().toHexString()];
}

/**
 * Alias
 */
String.prototype.toNamedString = function() { return this.toNamed(); }

/**
 * Alias
 */
String.prototype.toKeyword = function() { return this.toNamed(); }

/**
 * Alias
 */
String.prototype.toKeywordString = function() { return this.toNamed(); }

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
	else if(isNamed.call(this)) {
		return 3;
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
		// ^rgba?\(\s*(\d*\.?\d+%?\s*,\s*){2}\d*\.?\d+%?\s*(,\s*\d*.?\d+\s*)?\)$

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
		// ^hsla?\(\s*-?\d*.?\d+(\s*,\s*-?\d*.?\d+%){2}\s*(,\s*\d*.?\d+\s*)?\)$

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

function isNamed() {
	return NAMED_TO_HEX.hasOwnProperty(this.trim());
}

/**
 * Pads any valid hex color into #xxxxxx
 * @param {String} - hexVal the hexadecimal to pad
 * @reeturn {String} - a properly padded hexadecimal value (6 digits preceded by a #)
 */
function padHex(hexVal) {
	var val = (hexVal.charAt(0) === "#" ? hexVal.substring(1) : hexVal);
	if(val.length === 3) {
		val = val.charAt(0) + val.charAt(0) + val.charAt(1) + val.charAt(1) + val.charAt(2) + val.charAt(2);
	}
	return val;
}

var NAMED_TO_HEX = {
	"aliceblue": "#f0f8ff",
	"antiquewhite": "#faebd7",
	"aqua": "#00ffff",
	"aquamarine": "#7fffd4",
	"azure": "#f0ffff",
	"beige": "#f5f5dc",
	"bisque": "#ffe4c4",
	"black": "#000000",
	"blanchedalmond": "#ffebcd",
	"blue": "#0000ff",
	"blueviolet": "#8a2be2",
	"brown": "#a52a2a",
	"burlywood": "#deb887",
	"cadetblue": "#5f9ea0",
	"chartreuse": "#7fff00",
	"chocolate": "#d2691e",
	"coral": "#ff7f50",
	"cornflowerblue": "#6495ed",
	"cornsilk": "#fff8dc",
	"crimson": "#dc143c",
	"cyan": "#00ffff",
	"darkblue": "#00008b",
	"darkcyan": "#008b8b",
	"darkgoldenrod": "#b8860b",
	"darkgray": "#a9a9a9",
	"darkgrey": "#a9a9a9",
	"darkgreen": "#006400",
	"darkkhaki": "#bdb76b",
	"darkmagenta": "#8b008b",
	"darkolivegreen": "#556b2f",
	"darkorange": "#ff8c00",
	"darkorchid": "#9932cc",
	"darkred": "#8b0000",
	"darksalmon": "#e9967a",
	"darkseagreen": "#8fbc8f",
	"darkslateblue": "#483d8b",
	"darkslategray": "#2f4f4f",
	"darkslategrey": "#2f4f4f",
	"darkturquoise": "#00ced1",
	"darkviolet": "#9400d3",
	"deeppink": "#ff1493",
	"deepskyblue": "#00bfff",
	"dimgray": "#696969",
	"dimgrey": "#696969",
	"dodgerblue": "#1e90ff",
	"firebrick": "#b22222",
	"floralwhite": "#fffaf0",
	"forestgreen": "#228b22",
	"fuchsia": "#ff00ff",
	"gainsboro": "#dcdcdc",
	"ghostwhite": "#f8f8ff",
	"gold": "#ffd700",
	"goldenrod": "#daa520",
	"gray": "#808080",
	"grey": "#808080",
	"green": "#008000",
	"greenyellow": "#adff2f",
	"honeydew": "#f0fff0",
	"hotpink": "#ff69b4",
	"indianred": "#cd5c5c",
	"indigo": "#4b0082",
	"ivory": "#fffff0",
	"khaki": "#f0e68c",
	"lavender": "#e6e6fa",
	"lavenderblush": "#fff0f5",
	"lawngreen": "#7cfc00",
	"lemonchiffon": "#fffacd",
	"lightblue": "#add8e6",
	"lightcoral": "#f08080",
	"lightcyan": "#e0ffff",
	"lightgoldenrodyellow": "#fafad2",
	"lightgray": "#d3d3d3",
	"lightgrey": "#d3d3d3",
	"lightgreen": "#90ee90",
	"lightpink": "#ffb6c1",
	"lightsalmon": "#ffa07a",
	"lightseagreen": "#20b2aa",
	"lightskyblue": "#87cefa",
	"lightslategray": "#778899",
	"lightslategrey": "#778899",
	"lightsteelblue": "#b0c4de",
	"lightyellow": "#ffffe0",
	"lime": "#00ff00",
	"limegreen": "#32cd32",
	"linen": "#faf0e6",
	"magenta": "#ff00ff",
	"maroon": "#800000",
	"mediumaquamarine": "#66cdaa",
	"mediumblue": "#0000cd",
	"mediumorchid": "#ba55d3",
	"mediumpurple": "#9370db",
	"mediumseagreen": "#3cb371",
	"mediumslateblue": "#7b68ee",
	"mediumspringgreen": "#00fa9a",
	"mediumturquoise": "#48d1cc",
	"mediumvioletred": "#c71585",
	"midnightblue": "#191970",
	"mintcream": "#f5fffa",
	"mistyrose": "#ffe4e1",
	"moccasin": "#ffe4b5",
	"navajowhite": "#ffdead",
	"navy": "#000080",
	"oldlace": "#fdf5e6",
	"olive": "#808000",
	"olivedrab": "#6b8e23",
	"orange": "#ffa500",
	"orangered": "#ff4500",
	"orchid": "#da70d6",
	"palegoldenrod": "#eee8aa",
	"palegreen": "#98fb98",
	"paleturquoise": "#afeeee",
	"palevioletred": "#db7093",
	"papayawhip": "#ffefd5",
	"peachpuff": "#ffdab9",
	"peru": "#cd853f",
	"pink": "#ffc0cb",
	"plum": "#dda0dd",
	"powderblue": "#b0e0e6",
	"purple": "#800080",
	"red": "#ff0000",
	"rosybrown": "#bc8f8f",
	"royalblue": "#4169e1",
	"saddlebrown": "#8b4513",
	"salmon": "#fa8072",
	"sandybrown": "#f4a460",
	"seagreen": "#2e8b57",
	"seashell": "#fff5ee",
	"sienna": "#a0522d",
	"silver": "#c0c0c0",
	"skyblue": "#87ceeb",
	"slateblue": "#6a5acd",
	"slategray": "#708090",
	"slategrey": "#708090",
	"snow": "#fffafa",
	"springgreen": "#00ff7f",
	"steelblue": "#4682b4",
	"tan": "#d2b48c",
	"teal": "#008080",
	"thistle": "#d8bfd8",
	"tomato": "#ff6347",
	"turquoise": "#40e0d0",
	"violet": "#ee82ee",
	"wheat": "#f5deb3",
	"white": "#ffffff",
	"whitesmoke": "#f5f5f5",
	"yellow": "#ffff00",
	"yellowgreen": "#9acd32"
};

var HEX_TO_NAMED = {
	"#f0f8ff": "aliceblue",
	"#faebd7": "antiquewhite",
	"#00ffff": "aqua",
	"#7fffd4": "aquamarine",
	"#f0ffff": "azure",
	"#f5f5dc": "beige",
	"#ffe4c4": "bisque",
	"#000000": "black",
	"#ffebcd": "blanchedalmond",
	"#0000ff": "blue",
	"#8a2be2": "blueviolet",
	"#a52a2a": "brown",
	"#deb887": "burlywood",
	"#5f9ea0": "cadetblue",
	"#7fff00": "chartreuse",
	"#d2691e": "chocolate",
	"#ff7f50": "coral",
	"#6495ed": "cornflowerblue",
	"#fff8dc": "cornsilk",
	"#dc143c": "crimson",
	"#00ffff": "cyan",
	"#00008b": "darkblue",
	"#008b8b": "darkcyan",
	"#b8860b": "darkgoldenrod",
	"#a9a9a9": "darkgray",
	"#006400": "darkgreen",
	"#bdb76b": "darkkhaki",
	"#8b008b": "darkmagenta",
	"#556b2f": "darkolivegreen",
	"#ff8c00": "darkorange",
	"#9932cc": "darkorchid",
	"#8b0000": "darkred",
	"#e9967a": "darksalmon",
	"#8fbc8f": "darkseagreen",
	"#483d8b": "darkslateblue",
	"#2f4f4f": "darkslategray",
	"#00ced1": "darkturquoise",
	"#9400d3": "darkviolet",
	"#ff1493": "deeppink",
	"#00bfff": "deepskyblue",
	"#696969": "dimgray",
	"#1e90ff": "dodgerblue",
	"#b22222": "firebrick",
	"#fffaf0": "floralwhite",
	"#228b22": "forestgreen",
	"#ff00ff": "fuchsia",
	"#dcdcdc": "gainsboro",
	"#f8f8ff": "ghostwhite",
	"#ffd700": "gold",
	"#daa520": "goldenrod",
	"#808080": "gray",
	"#008000": "green",
	"#adff2f": "greenyellow",
	"#f0fff0": "honeydew",
	"#ff69b4": "hotpink",
	"#cd5c5c": "indianred", 
	"#4b0082": "indigo", 
	"#fffff0": "ivory",
	"#f0e68c": "khaki",
	"#e6e6fa": "lavender",
	"#fff0f5": "lavenderblush",
	"#7cfc00": "lawngreen",
	"#fffacd": "lemonchiffon",
	"#add8e6": "lightblue",
	"#f08080": "lightcoral",
	"#e0ffff": "lightcyan",
	"#fafad2": "lightgoldenrodyellow",
	"#d3d3d3": "lightgray",
	"#90ee90": "lightgreen",
	"#ffb6c1": "lightpink",
	"#ffa07a": "lightsalmon",
	"#20b2aa": "lightseagreen",
	"#87cefa": "lightskyblue",
	"#778899": "lightslategray",
	"#b0c4de": "lightsteelblue",
	"#ffffe0": "lightyellow",
	"#00ff00": "lime",
	"#32cd32": "limegreen",
	"#faf0e6": "linen",
	"#ff00ff": "magenta",
	"#800000": "maroon",
	"#66cdaa": "mediumaquamarine",
	"#0000cd": "mediumblue",
	"#ba55d3": "mediumorchid",
	"#9370db": "mediumpurple",
	"#3cb371": "mediumseagreen",
	"#7b68ee": "mediumslateblue",
	"#00fa9a": "mediumspringgreen",
	"#48d1cc": "mediumturquoise",
	"#c71585": "mediumvioletred",
	"#191970": "midnightblue",
	"#f5fffa": "mintcream",
	"#ffe4e1": "mistyrose",
	"#ffe4b5": "moccasin",
	"#ffdead": "navajowhite",
	"#000080": "navy",
	"#fdf5e6": "oldlace",
	"#808000": "olive",
	"#6b8e23": "olivedrab",
	"#ffa500": "orange",
	"#ff4500": "orangered",
	"#da70d6": "orchid",
	"#eee8aa": "palegoldenrod",
	"#98fb98": "palegreen",
	"#afeeee": "paleturquoise",
	"#db7093": "palevioletred",
	"#ffefd5": "papayawhip",
	"#ffdab9": "peachpuff",
	"#cd853f": "peru",
	"#ffc0cb": "pink",
	"#dda0dd": "plum",
	"#b0e0e6": "powderblue",
	"#800080": "purple",
	"#ff0000": "red",
	"#bc8f8f": "rosybrown",
	"#4169e1": "royalblue",
	"#8b4513": "saddlebrown",
	"#fa8072": "salmon",
	"#f4a460": "sandybrown",
	"#2e8b57": "seagreen",
	"#fff5ee": "seashell",
	"#a0522d": "sienna",
	"#c0c0c0": "silver",
	"#87ceeb": "skyblue",
	"#6a5acd": "slateblue",
	"#708090": "slategray",
	"#fffafa": "snow",
	"#00ff7f": "springgreen",
	"#4682b4": "steelblue",
	"#d2b48c": "tan",
	"#008080": "teal",
	"#d8bfd8": "thistle",
	"#ff6347": "tomato",
	"#40e0d0": "turquoise",
	"#ee82ee": "violet",
	"#f5deb3": "wheat",
	"#ffffff": "white",
	"#f5f5f5": "whitesmoke",
	"#ffff00": "yellow",
	"#9acd32": "yellowgreen"
};


})();