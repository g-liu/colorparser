QUnit.config.testTimeout = 1000;
QUnit.module("color black", {
	setup: function() {
		rgb = "rgb(0,0,0)";
		hex = "#000000";
		hsl = "hsl(0,0%,0%)";

		rgbExp = [0, 0, 0];
		hexExp = ["00", "00", "00"];
		hslExp = [0, 0, 0];
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

QUnit.module("color white", {
	setup: function() {
		rgb = "rgb(255,255,255)";
		hex = "#ffffff";
		hsl = "hsl(0,100%,100%)";

		rgbExp = [255, 255, 255];
		hexExp = ["ff", "ff", "ff"];
		hslExp = [0, 0, 100];
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
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(hslSp.toRGBArray(), hsl.toRGBArray(), "whitespace ignored");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(hslSp.toHexArray(), hsl.toHexArray(), "whitespace ignored");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(hslSp.toHSLArray(), hsl.toHSLArray(), "whitespace ignored");
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

// TODO: test filtering of invalid colors
