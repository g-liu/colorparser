ColorParser
===========

A simple, lightweight, dependency-free JavaScript library to handle color conversion.

## Installation

Download the `colorparser.js` file into your directory, then

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
    "linen".toHex(); // Supports CSS Named colors
    "rgba(31,177,29,0.48)".toHSLString(); // supports alpha transparency

## Documentation

_Documentation will be moved to a GitHub page soon. For now, it resides here._

Four color spaces are available:

* RGB (Red-Green-Blue)
* Hex (Hexadecimal)
* HSL (Hue-Saturation-Luminance)
* Named [CSS standard + X11 colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

RGB and HSL both support transparency (alpha).

Three output formats are available:

* (raw JSON)
  - for RGB: `{"r": ###, "g": ###, "b": ###, "a": ##}`
  - for Hex: `{"r": "##", "g": "##", "b": "##"}`
  - for HSL: `{"h": ###, "s": ###, "l": ###, "a": ##}`
* Array
  - for RGB, Hex: `[r, g, b, a]`
  - for HSL: `[h, s, l, a]`
* String (a valid CSS color string)

Note that `.toNamed()` will only return a String, as that is the only output format that makes sense.

To convert a color to another color space, with an optional output format:

    var string = "a valid color string here";
    string.to<<colorspace>><<outputformat>>();

If `<<outputformat>>` is not specified, defaults to returning a JSON object. _(Exception: `.toNamed()` will return a CSS color name if available.)_

### Examples

See "Examples" section.

### Valid color formats

The library supports a subset of valid CSS colors.

* *RGB(A):*
  - `rgb(###, ###, ###)`. integers from [0..255],
  - `rgb(###%, ###%, ###%)`. percents from [0..100], decimals supported
  - `rgba(###, ###, ###, ##)`. alpha = real numbers from [0..1]
  - `rgba(###%, ###%, ###%, ##)`. same as above.
* *Hex:*
  - `#xxx`
  - `#xxxxxx`
  - `xxx`
  - `xxxxxx`
* *HSL:*
  - `hsl(###, ###%, ###%)`. all values decimal supported. hue will wrap to [0..360), sat/lum will be constrained to [0..100]
  - `hsla(###, ###%, ###%, ##)`. alpha = real numbers from [0..1]

* *Named:* `<<name of color>>`, British spelling "grey" supported. See [Color Keywords (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) for a list of colors

An invalid color format (e.g. `rgb(256,54,128)` or `#34fc`) will result in an error, for any conversion.

## Demo

Coming soon.
