ColorParser
===========

A simple, lightweight, dependency-free JavaScript library to handle color conversion.

## Examples

As easy as

	"#fedcba".toRGB(); // { "r": 254, "g": 220, "b": 186 }
	"rgb(33,68,128)".toHexString(); // "#214480"
	    // want that without "#" prefix? .toHexString(false)
    
	"a3f".toRGBString(); // works with different hex color formats
	"#ab6622".toHSL(); // supports HSL too!

## Demo

Coming soon.

## Future

* Support transparency (`rgba()`, `hsla()`)? _Caveat_: HEX color codes do not have transparency.
* Support CSS Named colors and X11 colors (e.g. `aliceblue`, `red`)
