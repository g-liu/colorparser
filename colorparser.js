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
			var usePercent = (nums[0][nums[0].length - 1] === "%") ? true : false;
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
