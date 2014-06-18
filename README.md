ColorParser
===========

A simple, lightweight, dependency-free JavaScript library to handle color conversion.

## Installation

Download the `colorparser.js` file into your web directory, then

	<script src="path/to/colorparser.js" type="text/javascript"></script>

That's it.

## Examples

As easy as

	"#fedcba".toRGB(); // { "r": 254, "g": 220, "b": 186 }
	"rgb(33,68,128)".toHexString(); // "#214480"
	    // want that without "#" prefix? .toHexString(false)
    
	"a3f".toRGBString(); // works with different hex color formats
	"rgb( 33, 29, 255 )".toHSL(); // space friendly
	"hsl(0, 22%, 84%)".toHexArray(); // Yep, we support HSL

## Demo

Coming soon.

## Future

* Support transparency (`rgba()`, `hsla()`)? _Caveat_: HEX color codes do not have transparency.
* Support CSS Named colors and X11 colors (e.g. `aliceblue`, `red`)
