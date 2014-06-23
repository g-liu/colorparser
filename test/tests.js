QUnit.config.testTimeout = 1000;
QUnit.module("color black", {
	setup: function() {
		rgb = "rgb(0,0,0)";
		hex = "#000000";
		hsl = "hsl(0,0%,0%)";
		named = "black";

		rgbExp = [0, 0, 0, 1];
		hexExp = ["00", "00", "00"];
		hslExp = [0, 0, 0, 1];
	}
});
QUnit.test("hex2rgb", function(assert) {
	var res = hex.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("hex2hsl", function(assert) {
	var res = hex.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("hex2named", function(assert) {
	var res = hex.toNamed();
	assert.deepEqual(res, named, hex + " is " + named);
});
QUnit.test("hex2hex (reflexive)", function(assert) {
	var res = hex.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("rgb2hex", function(assert) {
	var res = rgb.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("rgb2hsl", function(assert) {
	var res = rgb.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("rgb2named", function(assert) {
	var res = rgb.toNamed();
	assert.deepEqual(res, named, rgb + " is " + named);
});
QUnit.test("rgb2rgb (reflexive)", function(assert) {
	var res = rgb.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("hsl2rgb", function(assert) {
	var res = hsl.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("hsl2hex", function(assert) {
	var res = hsl.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("hsl2hsl (reflexive)", function(assert) {
	var res = hsl.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("hsl2named", function(assert) {
	var res = hsl.toNamed();
	assert.deepEqual(res, named, hsl + " is " + named);
});
QUnit.test("named2rgb", function(assert) {
	var res = named.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("named2hex", function(assert) {
	var res = named.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("named2hsl", function(assert) {
	var res = named.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("named2named (reflexive)", function(assert) {
	var res = named.toNamed();
	assert.deepEqual(res, named, named + " is " + named);
});

QUnit.module("color white", {
	setup: function() {
		rgb = "rgb(255,255,255)";
		hex = "#ffffff";
		hsl = "hsl(0,0%,100%)";
		named = "white";

		rgbExp = [255, 255, 255, 1];
		hexExp = ["ff", "ff", "ff"];
		hslExp = [0, 0, 100, 1];
	}
});
QUnit.test("hex2rgb", function(assert) {
	var res = hex.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("hex2hex (reflexive)", function(assert) {
	var res = hex.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("hex2hsl", function(assert) {
	var res = hex.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("hex2named", function(assert) {
	var res = hex.toNamed();
	assert.deepEqual(res, named, hex + " is " + named);
});
QUnit.test("rgb2rgb (reflexive)", function(assert) {
	var res = rgb.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("rgb2hex", function(assert) {
	var res = rgb.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("rgb2hsl", function(assert) {
	var res = rgb.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("rgb2named", function(assert) {
	var res = rgb.toNamed();
	assert.deepEqual(res, named, rgb + " is " + named);
});
QUnit.test("hsl2rgb", function(assert) {
	var res = hsl.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("hsl2hex", function(assert) {
	var res = hsl.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("hsl2hsl (reflexive)", function(assert) {
	var res = hsl.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("hsl2named", function(assert) {
	var res = hsl.toNamed();
	assert.deepEqual(res, named, hsl + " is " + named);
});
QUnit.test("named2rgb", function(assert) {
	var res = named.toRGBArray();
	assert.deepEqual(res, rgbExp, "expecting array " + rgbExp.toString());
});
QUnit.test("named2hex", function(assert) {
	var res = named.toHexArray();
	assert.deepEqual(res, hexExp, "expecting array " + hexExp.toString());
});
QUnit.test("named2hsl", function(assert) {
	var res = named.toHSLArray();
	assert.deepEqual(res, hslExp, "expecting array " + hslExp.toString());
});
QUnit.test("named2named (reflexive)", function(assert) {
	var res = named.toNamed();
	assert.deepEqual(res, named, named + " is " + named);
});

QUnit.module("RGB red value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toRGBArray()[0], 37, "red value is 37");
	assert.deepEqual("rgb(215,41,23)".toRGBArray()[0], 215, "red value is 215");
	assert.deepEqual("rgb(86%,22%,100%)".toRGBArray()[0], 219.3, "red value is 219.3");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toRGBArray()[0], 45, "red value is 45 (0x2d)");
	assert.deepEqual("#02f204".toRGBArray()[0], 2, "red value is 2 (0x02)");
	assert.deepEqual("#ff8e7c".toRGBArray()[0], 255, "red value is 255 (0xff)");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(0,100%,50%)".toRGBArray()[0], 255, "red value is 255");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("red".toRGBArray()[0], 255, "red value is 255");
	assert.deepEqual("darkorange".toRGBArray()[0], 255, "red value is 255");
	assert.deepEqual("gold".toRGBArray()[0], 255, "red value is 255");
	assert.deepEqual("maroon".toRGBArray()[0], 128, "red value is 128");
	assert.deepEqual("thistle".toRGBArray()[0], 216, "red value is 216");
});

QUnit.module("RGB green value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toRGBArray()[1], 41, "green value is 41");
	assert.deepEqual("rgb(215,88,23)".toRGBArray()[1], 88, "green value is 88");
	assert.deepEqual("rgb(83%,22%,100%)".toRGBArray()[1], 56.1, "green value is 56.1");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toRGBArray()[1], 136, "green value is 136 (0x88)");
	assert.deepEqual("#02f204".toRGBArray()[1], 242, "green value is 242 (0xf2)");
	assert.deepEqual("#ff8e7c".toRGBArray()[1], 142, "green value is 142 (0x8e)");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(120,100%,50%)".toRGBArray()[1], 255, "green value is 255");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("green".toRGBArray()[1], 128, "green value is 128");
	assert.deepEqual("aquamarine".toRGBArray()[1], 255, "green value is 255");
	assert.deepEqual("firebrick".toRGBArray()[1], 34, "green value is 34");
	assert.deepEqual("darkslategray".toRGBArray()[1], 79, "green value is 79");
	assert.deepEqual("darkolivegreen".toRGBArray()[1], 107, "green value is 107");
});

QUnit.module("RGB blue value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toRGBArray()[2], 23, "blue value is 23");
	assert.deepEqual("rgb(215,88,99)".toRGBArray()[2], 99, "blue value is 99");
	assert.deepEqual("rgb(83%,22%,100%)".toRGBArray()[2], 255, "blue value is 255");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toRGBArray()[2], 33, "blue value is 33 (0x21)");
	assert.deepEqual("#02f204".toRGBArray()[2], 4, "blue value is 4 (0x04)");
	assert.deepEqual("#ff8e7c".toRGBArray()[2], 124, "blue value is 142 (0x7c)");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(240,100%,50%)".toRGBArray()[2], 255, "blue value is 255");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("blue".toRGBArray()[2], 255, "blue value is 255");
	assert.deepEqual("lawngreen".toRGBArray()[2], 0, "blue value is 0");
	assert.deepEqual("magenta".toRGBArray()[2], 255, "blue value is 255");
	assert.deepEqual("midnightblue".toRGBArray()[2], 112, "blue value is 112");
	assert.deepEqual("saddlebrown".toRGBArray()[2], 19, "blue value is 19");
});

QUnit.module("Hex red value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toHexArray()[0], "25", "red value is 0x25 (37)");
	assert.deepEqual("rgb(215,41,23)".toHexArray()[0], "d7", "red value is 0xd7 (215)");
	assert.deepEqual("rgb(83%,22%,100%)".toHexArray()[0], "d4", "red value is 0xd4 (212)");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toHexArray()[0], "2d", "red value is 0x2d");
	assert.deepEqual("#02f204".toHexArray()[0], "02", "red value is 0x02");
	assert.deepEqual("#ff8e7c".toHexArray()[0], "ff", "red value is 0xff");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(0,100%,50%)".toHexArray()[0], "ff", "red value is 0xff");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("red".toHexArray()[0], "ff", "red value is 0xff");
	assert.deepEqual("darkorange".toHexArray()[0], "ff", "red value is 0xff");
	assert.deepEqual("gold".toHexArray()[0], "ff", "red value is 0xff");
	assert.deepEqual("maroon".toHexArray()[0], "80", "red value is 0x80");
	assert.deepEqual("thistle".toHexArray()[0], "d8", "red value is 0xd8");
});

QUnit.module("Hex green value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toHexArray()[1], "29", "green value is 0x29");
	assert.deepEqual("rgb(215,88,23)".toHexArray()[1], "58", "green value is 0x58");
	assert.deepEqual("rgb(83%,22%,100%)".toHexArray()[1], "38", "green value is 0x38");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toHexArray()[1], "88", "green value is 0x88");
	assert.deepEqual("#02f204".toHexArray()[1], "f2", "green value is 0xf2");
	assert.deepEqual("#ff8e7c".toHexArray()[1], "8e", "green value is 0x8e");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(120,100%,50%)".toHexArray()[1], "ff", "green value is 0xff");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("green".toHexArray()[1], "80", "green value is 0x80");
	assert.deepEqual("aquamarine".toHexArray()[1], "ff", "green value is 0xff");
	assert.deepEqual("firebrick".toHexArray()[1], "22", "green value is 0x22");
	assert.deepEqual("darkslategray".toHexArray()[1], "4f", "green value is 0x4f");
	assert.deepEqual("darkolivegreen".toHexArray()[1], "6b", "green value is 0x6b");
});

QUnit.module("Hex blue value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toHexArray()[2], "17", "blue value is 0x17");
	assert.deepEqual("rgb(215,88,99)".toHexArray()[2], "63", "blue value is 0x63");
	assert.deepEqual("rgb(83%,22%,100%)".toHexArray()[2], "ff", "blue value is 0xff");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toHexArray()[2], "21", "blue value is 0x21");
	assert.deepEqual("#02f204".toHexArray()[2], "04", "blue value is 0x04");
	assert.deepEqual("#ff8e7c".toHexArray()[2], "7c", "blue value is 0x7c");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(240,100%,50%)".toHexArray()[2], "ff", "blue value is 0xff");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("blue".toHexArray()[2], "ff", "blue value is 0xff");
	assert.deepEqual("lawngreen".toHexArray()[2], "00", "blue value is 0x00");
	assert.deepEqual("magenta".toHexArray()[2], "ff", "blue value is 0xff");
	assert.deepEqual("midnightblue".toHexArray()[2], "70", "blue value is 0x70");
	assert.deepEqual("saddlebrown".toHexArray()[2], "13", "blue value is 0x13");
});

QUnit.module("HSL hue correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toHSLArray()[0], 73, "hue is 73");
	assert.deepEqual("rgb(215,41,23)".toHSLArray()[0], 6, "hue is 6");
	assert.deepEqual("rgb(80%,20%,100%)".toHSLArray()[0], 285, "hue is 285");
});
QUnit.test("from hex", function(assert) {
	assert.deepEqual("#2d8821".toHSLArray()[0], 113, "hue is 113");
	assert.deepEqual("#02f204".toHSLArray()[0], 121, "hue is 121");
	assert.deepEqual("#ff8e7c".toHSLArray()[0], 8, "hue is 8");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(27,35%,88%)".toHSLArray()[0], 27, "hue is 27");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("red".toHSLArray()[0], 0, "hue is 0");
	assert.deepEqual("darkorange".toHSLArray()[0], 33, "hue is 33");
	assert.deepEqual("gold".toHSLArray()[0], 51, "hue is 51");
	assert.deepEqual("maroon".toHSLArray()[0], 0, "hue is 0");
	assert.deepEqual("thistle".toHSLArray()[0], 300, "hue is 300");
});

// TODO: rest of HSL components

QUnit.module("Reflexive conversions", {
	setup: function() {
		var r = 85;
		var g = 51;
		var b = 17;

		var h = 72;
		var s = 20;
		var l = 50;

		rgb = "rgb(" + r + "," + g + "," + b + ")";
		hex = "#" + Math.random().toString(16).substring(2, 8);
		hsl = "hsl(" + h + "," + s + "%," + l + "%)";
		named = "chartreuse";
	}
});
QUnit.test("rgb2hex2rgb", function(assert) {
	assert.deepEqual(rgb.toHexString().toRGBString(), rgb, "rgb -> hex -> rgb conversion preserved");
});
QUnit.test("rgb2hsl2rgb", function(assert) {
	assert.deepEqual(rgb.toHSLString().toRGBString(), rgb, "rgb -> hsl -> rgb conversion preserved");
});
QUnit.test("hex2rgb2hex", function(assert) {
	assert.deepEqual(hex.toRGBString().toHexString(), hex, "hex -> rgb -> hex conversion preserved");
});
QUnit.test("hex2hsl2hex", function(assert) {
	assert.deepEqual(hex.toHSLString().toHexString(), hex, "hex -> hsl -> hex conversion preserved");
});
QUnit.test("hsl2rgb2hsl", function(assert) {
	assert.deepEqual(hsl.toRGBString().toHSLString(), hsl, "hsl -> rgb -> hsl conversion preserved");
});
QUnit.test("hsl2hex2hsl", function(assert) {
	assert.deepEqual(hsl.toHexString().toHSLString(), hsl, "hsl -> hex -> hsl conversion preserved");
});
QUnit.test("named2rgb2named", function(assert) {
	assert.deepEqual(named.toRGBString().toNamed(), named, "named -> rgb -> named conversion preserved");
});
QUnit.test("named2hex2named", function(assert) {
	assert.deepEqual(named.toHexString().toNamed(), named, "named -> hex -> named conversion preserved");
});
QUnit.test("named2hsl2named", function(assert) {
	assert.deepEqual(named.toHSLString().toNamed(), named, "named -> hsl -> named conversion preserved");
});

QUnit.module("rgb percentage handling", {
	setup: function() {
		rgb = "rgb(51,102,153)";
		rgbP = "rgb(20%,40%,60%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(rgbP.toRGBArray(), rgb.toRGBArray(), "all percents handled correctly in rgb conversion");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(rgbP.toHexArray(), rgb.toHexArray(), "all percents handled correctly in hex conversion");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(rgbP.toHSLArray(), rgb.toHSLArray(), "all percents handled correctly in hsl conversion");
});

QUnit.module("hex format handling");
QUnit.test("3hex-no-pre === 3hex", function(assert) {
	var hex3 = "3a7";
	var _hex3 = "#3a7";
	assert.deepEqual(hex3.toRGBArray(), _hex3.toRGBArray(), "hex -> rgb === #hex -> rgb");
});
QUnit.test("6hex-no-pre === 6hex", function(assert) {
	var hex6 = "8acf40";
	var _hex6 = "#8acf40";
	assert.deepEqual(hex6.toRGBArray(), _hex6.toRGBArray(), "hheexx -> rgb === #hheexx -> rgb");
});
QUnit.test("3hex-no-pre === 6hex-equiv-no-pre", function(assert) {
	var hex3 = "80c";
	var hex6Equiv = "8800cc";
	assert.deepEqual(hex3.toRGBArray(), hex6Equiv.toRGBArray(), "hex -> rgb === hheexx -> rgb");
});
QUnit.test("3hex-no-pre === 6hex-equiv", function(assert) {
	var hex3 = "80c";
	var _hex6Equiv = "#8800cc";
	assert.deepEqual(hex3.toRGBArray(), _hex6Equiv.toRGBArray(), "hex -> rgb === #hheexx -> rgb");
});
QUnit.test("3hex === 6hex-equiv-no-pre", function(assert) {
	var _hex3 = "#80c";
	var hex6Equiv = "8800cc";
	assert.deepEqual(_hex3.toRGBArray(), hex6Equiv.toRGBArray(), "#hex -> rgb === hheexx -> rgb");
});
QUnit.test("3hex === 6hex-equiv", function(assert) {
	var _hex3 = "#80c";
	var _hex6Equiv = "#8800cc";
	assert.deepEqual(_hex3.toRGBArray(), _hex6Equiv.toRGBArray(), "#hex -> rgb === #hheexx -> rgb");
});

QUnit.module("hue wrapping");
QUnit.test("hue > 360", function(assert) {
	var hwrap = "hsl(427,50%,50%)";
	assert.deepEqual(hwrap.toHSLArray()[0], 67, "hue wraps to 67");
});
QUnit.test("hue > 2*360", function(assert) {
	var hwrap = "hsl(823,50%,50%)";
	assert.deepEqual(hwrap.toHSLArray()[0], 103, "hue wraps to 103");
});
QUnit.test("hue < 0", function(assert) {
	var hwrap = "hsl(-284,50%,50%)";
	assert.deepEqual(hwrap.toHSLArray()[0], 76, "hue wraps to 76");
});
QUnit.test("hue < -360", function(assert) {
	var hwrap = "hsl(-488,50%,50%)";
	assert.deepEqual(hwrap.toHSLArray()[0], 232, "hue wraps to 232");
});
QUnit.test("hue modulus test - positive hues", function(assert) {
	var hwrap1 = "hsl(888,50%,50%)";
	var hwrap2 = "hsl(528,50%,50%)";
	assert.deepEqual(hwrap1.toHSLArray()[0], hwrap2.toHSLArray()[0], "both hues wrap to 168");
});
QUnit.test("hue modulus test - negative hues", function(assert) {
	var hwrap1 = "hsl(-1534,50%,50%)";
	var hwrap2 = "hsl(-814,50%,50%)";
	assert.deepEqual(hwrap1.toHSLArray()[0], hwrap2.toHSLArray()[0], "both hues(-) wrap to 266");
});
QUnit.test("hue modulus test - positive and negative hues", function(assert) {
	var hwrap1 = "hsl(731,50%,50%)";
	var hwrap2 = "hsl(-349,50%,50%)";
	assert.deepEqual(hwrap1.toHSLArray()[0], hwrap2.toHSLArray()[0], "both hues wrap to 11");
});

QUnit.module("saturation snapping");
QUnit.test("snap sat to 100", function(assert) {
	var ssnap = "hsl(241,437%,50%)";
	assert.deepEqual(ssnap.toHSLArray()[1], 100, "sat snaps to 100");
});
QUnit.test("snap sat to 0", function(assert) {
	var ssnap = "hsl(241,-77%,50%)";
	assert.deepEqual(ssnap.toHSLArray()[1], 0, "sat snaps to 0");
});

QUnit.module("luminance snapping");
QUnit.test("snap lum to 100", function(assert) {
	var lsnap = "hsl(241,50%,820%)";
	assert.deepEqual(lsnap.toHSLArray()[2], 100, "lum snaps to 100");
});
QUnit.test("snap lum to 0", function(assert) {
	var lsnap = "hsl(241,50%,-1111%)";
	assert.deepEqual(lsnap.toHSLArray()[2], 0, "lum snaps to 0");
});

QUnit.module("whitespace agnostic", {
	setup: function() {
		rgbSp = "rgb( 8,  214,   62     )";
		rgb = "rgb(8,214,62)";

		hslSp = "hsl(   232, 48%,    81% )";
		hsl = "hsl(232,48%,81%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(rgbSp.toRGBArray(), rgb.toRGBArray(), "whitespace ignored");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(rgbSp.toHexArray(), rgb.toHexArray(), "whitespace ignored");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(rgbSp.toHSLArray(), rgb.toHSLArray(), "whitespace ignored");
});
QUnit.test("rgb2named", function(assert) {
	var _rgbSp = "rgb(    240 , 128, 128  )";
	var _rgb = "rgb(240,128,128)";
	assert.deepEqual(_rgbSp.toNamed(), _rgb.toNamed(), "whitespace ignored");
});
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(hslSp.toRGBArray(), hsl.toRGBArray(), "whitespace ignored");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(hslSp.toHexArray(), hsl.toHexArray(), "whitespace ignored");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(hslSp.toHSLArray(), hsl.toHSLArray(), "whitespace ignored");
});
QUnit.test("hsl2named", function(assert) {
	var _hslSp = "hsl(  90 , 100% , 50%     )";
	var _hsl = "hsl(90,100%,50%)";
	assert.deepEqual(_hslSp.toNamed(), _hsl.toNamed(), "whitespace ignored");
});

QUnit.module("ignore extra zeroes", {
	setup: function() {
		rgb0 = "rgb(00251,000053,000104)";
		rgb = "rgb(251,53,104)";
		hsl0 = "hsl(0000251,0049%,060%)";
		hsl = "hsl(251,49%,60%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(rgb0.toRGBArray(), rgb.toRGBArray(), "padded zeroes ignored");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(rgb0.toHexArray(), rgb.toHexArray(), "padded zeroes ignored");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(rgb0.toHSLArray(), rgb.toHSLArray(), "padded zeroes ignored");
});
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(hsl0.toRGBArray(), hsl.toRGBArray(), "padded zeroes ignored");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(hsl0.toHexArray(), hsl.toHexArray(), "padded zeroes ignored");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(hsl0.toHSLArray(), hsl.toHSLArray(), "padded zeroes ignored");
});

QUnit.module("case insensitive", {
	setup: function() {
		this.rgb = "rgb(23%,88%,92.8%)";
		this.hex = "#dabefc";
		this.hsl = "hsl(27,49%,81%)";
		this.named = "purple";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(this.rgb.toUpperCase().toRGBArray(), this.rgb.toRGBArray(), "rgb arrays equal");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(this.rgb.toUpperCase().toHexArray(), this.rgb.toHexArray(), "hex arrays equal");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(this.rgb.toUpperCase().toHSLArray(), this.rgb.toHSLArray(), "hsl arrays equal");
});
QUnit.test("rgb2named", function(assert) {
	assert.deepEqual(this.rgb.toUpperCase().toNamed(), this.rgb.toNamed(), "keyword names equal");
});
QUnit.test("hex2rgb", function(assert) {
	assert.deepEqual(this.hex.toUpperCase().toRGBArray(), this.hex.toRGBArray(), "rgb arrays equal");
});
QUnit.test("hex2hex", function(assert) {
	assert.deepEqual(this.hex.toUpperCase().toHexArray(), this.hex.toHexArray(), "hex arrays equal");
});
QUnit.test("hex2hsl", function(assert) {
	assert.deepEqual(this.hex.toUpperCase().toHSLArray(), this.hex.toHSLArray(), "hsl arrays equal");
});
QUnit.test("hex2named", function(assert) {
	assert.deepEqual(this.hex.toUpperCase().toNamed(), this.hex.toNamed(), "keyword names equal");
});
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(this.hsl.toUpperCase().toRGBArray(), this.hsl.toRGBArray(), "rgb arrays equal");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(this.hsl.toUpperCase().toHexArray(), this.hsl.toHexArray(), "hex arrays equal");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(this.hsl.toUpperCase().toHSLArray(), this.hsl.toHSLArray(), "hsl arrays equal");
});
QUnit.test("hsl2named", function(assert) {
	assert.deepEqual(this.hsl.toUpperCase().toNamed(), this.hsl.toNamed(), "keyword names equal");
});
QUnit.test("named2rgb", function(assert) {
	assert.deepEqual(this.named.toUpperCase().toRGBArray(), this.named.toRGBArray(), "rgb arrays equal");
});
QUnit.test("named2hex", function(assert) {
	assert.deepEqual(this.named.toUpperCase().toHexArray(), this.named.toHexArray(), "hex arrays equal");
});
QUnit.test("named2hsl", function(assert) {
	assert.deepEqual(this.named.toUpperCase().toHSLArray(), this.named.toHSLArray(), "hsl arrays equal");
});
QUnit.test("named2named", function(assert) {
	assert.deepEqual(this.named.toUpperCase().toNamed(), this.named.toNamed(), "keyword names equal");
});

// TODO: test filtering of invalid colors
