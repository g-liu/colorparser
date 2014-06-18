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

## Documentation

_Documentation will be moved to a GitHub page soon. For now, it resides here._

Three color spaces are available:

* RGB (Red-Green-Blue)
* Hex (Hexadecimal)
* HSL (Hue-Saturation-Luminance)

Three output formats are available:

* (raw JSON)
  - for RGB: `{"r": ###, "g": ###, "b": ###}`
  - for Hex: `{"r": "##", "g": "##", "b": "##"}`
  - for HSL: `{"h": ###, "s": ###, "l": ###}`
* Array
  - for RGB, Hex: `[r, g, b]`
  - for HSL: `[h, s, l]`
* String (a valid CSS color string)

To convert a color to another color space, with an optional output format:

    var string = "a valid color string here";
    string.to<<colorspace>><<outputformat>>();

If `<<outputformat>>` is not specified, defaults to returning a JSON object.

### Examples

See "Examples" section.

### Valid color formats

The library supports a subset of valid CSS colors.

* *RGB:*
  - `rgb(###, ###, ###)`
  - `rgb(###%, ###%, ###%)`
* *Hex:*
  - `#xxx`
  - `#xxxxxx`
  - `xxx`
  - `xxxxxx`
* *HSL:* `hsl(###, ###%, ###%)`

An invalid color format (e.g. `rgb(256,54,128)` or `#34fc`) will result in an error, for any conversion.

## Demo

Coming soon.

## Future

* Support transparency (`rgba()`, `hsla()`)
  - _Caveat_: HEX color codes do not have transparency.
* Support CSS Named colors and X11 colors (e.g. `aliceblue`, `red`)
* Support Pantone colors (a long shot; 	this may need a library of its own!)
