String.prototype.toRGB = function() {
	var _rgb = this.toRGBArray();
	var rgb = {
		"r": _rgb[0],
		"g": _rgb[1],
		"b": _rgb[2]
	};

	return rgb;
}

String.prototype.toRGBArray = function() {
	var type = getType(this);
	var rgbArray = [-1, -1, -1];
	switch(type) {
		case 1: // RGB
			var rgb = this.match(/\d{1,3}%?/gi);
			var usePercent = (rgb[0][rgb[0].length - 1] === "%")
			for(var i = 0; i < rgb.length; i++) {
				rgb[i] = parseInt(rgb[i], 10);
				if(usePercent) {
					rgb[i] = Math.round(rgb[i] * 2.55);
				}
			}
			rgbArray = rgb.slice(0, 3);
			break;
		case 2: // HSL
			var hsl = this.match(/\d{1,3}/gi);
			// normalize
			hsl[0] = (hsl[0] == 360 ? 0 : hsl[0]);
			hsl[1] /= 100; hsl[2] /= 100;
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
				rgb[i] += hsl[2] - 0.5 * chroma;
				rgbArray[i] = Math.round(rgb[i] * 255);
			}
			break;
		case 0: // HEX
		default: 
			var that = (this[0] === "#" ? this.substring(1) : this);
			if(that.length === 3) {
				that = that[0] + that[0] + that[1] + that[1] + that[2] + that[2];
			}
			var bigint = parseInt(that, 16);
			rgbArray[0] = (bigint >> 16) & 255;
			rgbArray[1] = (bigint >> 8) & 255;
			rgbArray[2] = bigint & 255;
			break;
	}

	return rgbArray;

	/**
	 * Retrieve the color unit being used
	 * @param {String} color
	 * @return ...
	 */
	function getType(color) {
		if(isHex()) {
			return 0;
		}
		else if(isRGB()) {
			return 1;
		}
		else if(isHSL()) {
			return 2;
		}
		else {
			throw("Not a color: '" + color + "' is not a color.");
		}

		function isHex() {
			return color.match(/^#?[A-F0-9]{3}([A-F0-9]{3})?$/i);
		}

		function isRGB() {
			// preliminary "loose" regex match
			if(color.match(/^rgb\(\s*(\d{1,3}%?\s*,\s*){2}(\d{1,3}%?)\s*\)$/i)) {
				var nums = color.match(/[0-9]{1,3}%?/gi);
				if(!nums || !nums.length || nums.length != 3) {
					return false;
				}

				// check format of each
				var usePercent = (nums[0][nums[0].length - 1] === "%");
				for(var i = 0; i < 3; i++) {
					var numInt = parseInt(nums[i], 10);
					if(usePercent && (nums[i][nums[i].length - 1] !== "%" || !(numInt >= 0 && numInt <= 100))) {
						return false;
					}
					else if(numInt < 0 || numInt > 255) {
						return false;
					}
				}
				return true;
			}

			return false;
		}

		function isHSL() {
			// preliminary "loose" regex match
			if(color.match(/^hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/i)) {
				var nums = color.match(/\d{1,3}%?/gi);
				if(!nums || !nums.length || nums.length !== 3) {
					return false;
				}

				// check first num separately
				if(nums[0][nums[0].length - 1] === "%" || !(nums[0] >= 0 && nums[0] <= 360)) {
					return false;
				}
				for(var i = 1; i < 3; i++) {
					var numInt = parseInt(nums[i], 10);
					if(nums[i][nums[i].length - 1] !== "%" || !(numInt >= 0 && numInt <= 100)) {
						return false;
					}
				}
				return true;
			}

			return false;
		}
	}
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
