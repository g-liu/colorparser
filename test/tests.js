var MAX_TOL = 0.0001; // Floating point errors expected
QUnit.config.testTimeout = 1000;

QUnit.module("color black", {
	setup: function() {
		this.rgb = "rgb(0,0,0)";
		this.hex = "#000000";
		this.hsl = "hsl(0,0%,0%)";
		this.named = "black";

		this.rgbExp = [0, 0, 0, 1];
		this.hexExp = ["00", "00", "00"];
		this.hslExp = [0, 0, 0, 1];
	}
});
QUnit.test("rgb2hex", function(assert) {
	var res = this.rgb.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("rgb2hsl", function(assert) {
	var res = this.rgb.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("rgb2named", function(assert) {
	var res = this.rgb.toNamed();
	assert.deepEqual(res, this.named, this.rgb + " is " + this.named);
});
QUnit.test("rgb2rgb (reflexive)", function(assert) {
	var res = this.rgb.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hex2rgb", function(assert) {
	var res = this.hex.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hex2hsl", function(assert) {
	var res = this.hex.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("hex2named", function(assert) {
	var res = this.hex.toNamed();
	assert.deepEqual(res, this.named, this.hex + " is " + this.named);
});
QUnit.test("hex2hex (reflexive)", function(assert) {
	var res = this.hex.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("hsl2rgb", function(assert) {
	var res = this.hsl.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hsl2hex", function(assert) {
	var res = this.hsl.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("hsl2hsl (reflexive)", function(assert) {
	var res = this.hsl.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("hsl2named", function(assert) {
	var res = this.hsl.toNamed();
	assert.deepEqual(res, this.named, this.hsl + " is " + this.named);
});
QUnit.test("named2rgb", function(assert) {
	var res = this.named.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("named2hex", function(assert) {
	var res = this.named.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("named2hsl", function(assert) {
	var res = this.named.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("named2named (reflexive)", function(assert) {
	var res = this.named.toNamed();
	assert.deepEqual(res, this.named, this.named + " is " + this.named);
});

QUnit.module("color white", {
	setup: function() {
		this.rgb = "rgb(255,255,255)";
		this.hex = "#ffffff";
		this.hsl = "hsl(0,0%,100%)";
		this.named = "white";

		this.rgbExp = [255, 255, 255, 1];
		this.hexExp = ["ff", "ff", "ff"];
		this.hslExp = [0, 0, 100, 1];
	}
});
QUnit.test("rgb2hex", function(assert) {
	var res = this.rgb.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("rgb2hsl", function(assert) {
	var res = this.rgb.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("rgb2named", function(assert) {
	var res = this.rgb.toNamed();
	assert.deepEqual(res, this.named, this.rgb + " is " + this.named);
});
QUnit.test("rgb2rgb (reflexive)", function(assert) {
	var res = this.rgb.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hex2rgb", function(assert) {
	var res = this.hex.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hex2hsl", function(assert) {
	var res = this.hex.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("hex2named", function(assert) {
	var res = this.hex.toNamed();
	assert.deepEqual(res, this.named, this.hex + " is " + this.named);
});
QUnit.test("hex2hex (reflexive)", function(assert) {
	var res = this.hex.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("hsl2rgb", function(assert) {
	var res = this.hsl.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("hsl2hex", function(assert) {
	var res = this.hsl.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("hsl2hsl (reflexive)", function(assert) {
	var res = this.hsl.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("hsl2named", function(assert) {
	var res = this.hsl.toNamed();
	assert.deepEqual(res, this.named, this.hsl + " is " + this.named);
});
QUnit.test("named2rgb", function(assert) {
	var res = this.named.toRGBArray();
	assert.deepEqual(res, this.rgbExp, "expecting array " + this.rgbExp.toString());
});
QUnit.test("named2hex", function(assert) {
	var res = this.named.toHexArray();
	assert.deepEqual(res, this.hexExp, "expecting array " + this.hexExp.toString());
});
QUnit.test("named2hsl", function(assert) {
	var res = this.named.toHSLArray();
	assert.deepEqual(res, this.hslExp, "expecting array " + this.hslExp.toString());
});
QUnit.test("named2named (reflexive)", function(assert) {
	var res = this.named.toNamed();
	assert.deepEqual(res, this.named, this.named + " is " + this.named);
});

QUnit.module("RGB red value correctness");
QUnit.test("from rgb", function(assert) {
	assert.deepEqual("rgb(37,41,23)".toRGBArray()[0], 37, "red value is 37");
	assert.deepEqual("rgb(215,41,23)".toRGBArray()[0], 215, "red value is 215");
	QUnit.close("rgb(86%,22%,100%)".toRGBArray()[0], 219.3, MAX_TOL, "red value is 219.3");
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
	QUnit.close("rgb(83%,22%,100%)".toRGBArray()[1], 56.1, MAX_TOL, "green value is 56.1");
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
	QUnit.close("rgb(83%,22%,100%)".toRGBArray()[2], 255, MAX_TOL, "blue value is 255");
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
	QUnit.close("rgb(37,41,23)".toHSLArray()[0], 73.333333333333, MAX_TOL, "hue is 73+1/3");
	QUnit.close("rgb(215,41,23)".toHSLArray()[0], 5.625, MAX_TOL, "hue is 5+5/8");
	assert.deepEqual("rgb(80%,20%,100%)".toHSLArray()[0], 285, "hue is 285");
});
QUnit.test("from hex", function(assert) {
	QUnit.close("#2d8821".toHSLArray()[0], 113.0097087378640776699029126213592233009708737864077669902912, MAX_TOL, "hue is 113.0097087378640776699029126213592233009708737864077669902912...");
	QUnit.close("#02f204".toHSLArray()[0], 120.5, MAX_TOL, "hue is 120.5");
	QUnit.close("#ff8e7c".toHSLArray()[0], 8.244274809160305343511450381679389312977099236641221374045801, MAX_TOL, "hue is 8.244274809160305343511450381679389312977099236641221374045801...");
});
QUnit.test("from hsl", function(assert) {
	assert.deepEqual("hsl(27,35%,88%)".toHSLArray()[0], 27, "hue is 27");
});
QUnit.test("from named", function(assert) {
	assert.deepEqual("red".toHSLArray()[0], 0, "hue is 0");
	QUnit.close("darkorange".toHSLArray()[0], 32.94117647058823529411764705882352941176470588235294117647058, MAX_TOL, "hue is 32.94117647058823529411764705882352941176470588235294117647058...");
	QUnit.close("gold".toHSLArray()[0], 50.58823529411764705882352941176470588235294117647058823529411, MAX_TOL, "hue is 50.58823529411764705882352941176470588235294117647058823529411");
	assert.deepEqual("maroon".toHSLArray()[0], 0, "hue is 0");
	assert.deepEqual("thistle".toHSLArray()[0], 300, "hue is 300");
});

// TODO: rest of HSL components

QUnit.module("alpha preservation");
QUnit.test("rgba2hsla", function(assert) {
	var rgba = "rgba(25,166,3,0.523)";
	assert.deepEqual(rgba.toHSLArray()[3], 0.523, "Alpha = 0.523");
});
QUnit.test("rgba2hsla no leading 0", function(assert) {
	var rgba = "rgba(66,55,44,.3332)";
	assert.deepEqual(rgba.toHSLArray()[3], 0.3332, "Alpha = 0.3332");
});
QUnit.test("hsla2rgba", function(assert) {
	var hsla = "hsla(2,88%,72%,0.21111)";
	assert.deepEqual(hsla.toRGBArray()[3], 0.21111, "Alpha = 0.21111");
});
QUnit.test("hsla2rgba no leading 0", function(assert) {
	var hsla = "hsla(331,31%,55%,.78015)";
	assert.deepEqual(hsla.toRGBArray()[3], 0.78015, "Alpha = 0.78015");
});
QUnit.test("rgb2rgba implicit alpha", function(assert) {
	var rgb = "rgb(22,255,1)";
	assert.deepEqual(rgb.toRGBArray()[3], 1, "Alpha = 1");
});
QUnit.test("hex2rgba implicit alpha", function(assert) {
	var hex = "#82719f";
	assert.deepEqual(hex.toRGBArray()[3], 1, "Alpha = 1");
});
QUnit.test("hsl2rgba implicit alpha", function(assert) {
	var hsl = "hsl(50,51%,90%)";
	assert.deepEqual(hsl.toRGBArray()[3], 1, "Alpha = 1");
});
QUnit.test("named2rgba implicit alpha", function(assert) {
	var named = "aliceblue";
	assert.deepEqual(named.toRGBArray()[3], 1, "Alpha = 1");
});
QUnit.test("rgb2hsla implicit alpha", function(assert) {
	var rgb = "rgb(22,255,1)";
	assert.deepEqual(rgb.toHSLArray()[3], 1, "Alpha = 1");
});
QUnit.test("hex2hsla implicit alpha", function(assert) {
	var hex = "#82791f";
	assert.deepEqual(hex.toHSLArray()[3], 1, "Alpha = 1");
});
QUnit.test("hsl2hsla implicit alpha", function(assert) {
	var hsl = "hsl(50,51%,90%)";
	assert.deepEqual(hsl.toHSLArray()[3], 1, "Alpha = 1");
});
QUnit.test("named2hsla implicit alpha", function(assert) {
	var named = "darkkhaki";
	assert.deepEqual(named.toHSLArray()[3], 1, "Alpha = 1");
});

QUnit.module("formats", {
	setup: function() {
		this.r = 31;
		this.g = 188;
		this.b = 29;
		this.a = 0.214;

		this.rgb = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
	}
});
QUnit.test("rgb2rgbJSON", function(assert) {
	var rgbJson = this.rgb.toRGB();
	assert.deepEqual(rgbJson.r, this.r, "corresponding RED values = 31");
	assert.deepEqual(rgbJson.g, this.g, "corresponding GREEN values = 188");
	assert.deepEqual(rgbJson.b, this.b, "corresponding BLUE values = 29");
	assert.deepEqual(rgbJson.a, this.a, "corresponding ALPHA values = 0.214");
});
QUnit.test("rgb2hexJSON", function(assert) {
	var hexJson = this.rgb.toHex();
	var hexArray = this.rgb.toHexArray();
	assert.deepEqual(hexJson.r, hexArray[0], "corresponding RED values = 0x1f");
	assert.deepEqual(hexJson.g, hexArray[1], "corresponding GREEN values = 0xbc");
	assert.deepEqual(hexJson.b, hexArray[2], "corresponding BLUE values = 0x1d");
});
QUnit.test("rgb2hslJSON", function(assert) {
	var hslJson = this.rgb.toHSL();
	var hslArray = this.rgb.toHSLArray();
	assert.deepEqual(hslJson.h, hslArray[0], "corresponding HUE values ~= 119");
	assert.deepEqual(hslJson.s, hslArray[1], "corresponding SAT values ~= 73");
	assert.deepEqual(hslJson.l, hslArray[2], "corresponding LUM values ~= 43");
	assert.deepEqual(hslJson.a, hslArray[3], "corresponding ALPHA values = 0.214");
});

QUnit.module("Reflexive conversions", {
	setup: function() {
		this.r = 85;
		this.g = 51;
		this.b = 17;

		this.h = 72;
		this.s = 20;
		this.l = 50;

		this.rgb = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
		this.hex = "#" + Math.random().toString(16).substring(2, 8);
		this.hsl = "hsl(" + this.h + "," + this.s + "%," + this.l + "%)";
		this.named = "chartreuse";
	}
});
QUnit.test("rgb2hex2rgb", function(assert) {
	assert.deepEqual(this.rgb.toHexString().toRGBString(), this.rgb, "rgb -> hex -> rgb conversion preserved");
});
QUnit.test("rgb2hsl2rgb", function(assert) {
	var rgbActual = this.rgb.toHSLString().toRGBArray();
	QUnit.close(rgbActual[0], this.r, MAX_TOL, "rgb -> hsl -> rgb red conversion preserved");
	QUnit.close(rgbActual[1], this.g, MAX_TOL, "rgb -> hsl -> rgb green conversion preserved");
	QUnit.close(rgbActual[2], this.b, MAX_TOL, "rgb -> hsl -> rgb blue conversion preserved");
});
QUnit.test("hex2rgb2hex", function(assert) {
	assert.deepEqual(this.hex.toRGBString().toHexString(), this.hex, "hex -> rgb -> hex conversion preserved");
});
QUnit.test("hex2hsl2hex", function(assert) {
	assert.deepEqual(this.hex.toHSLString().toHexString(), this.hex, "hex -> hsl -> hex conversion preserved");
});
QUnit.test("hsl2rgb2hsl", function(assert) {
	assert.deepEqual(this.hsl.toRGBString().toHSLString(), this.hsl, "hsl -> rgb -> hsl conversion preserved");
});
QUnit.test("hsl2hex2hsl", function(assert) {
	assert.deepEqual(this.hsl.toHexString().toHSLString(), this.hsl, "hsl -> hex -> hsl conversion preserved");
});
QUnit.test("named2rgb2named", function(assert) {
	assert.deepEqual(this.named.toRGBString().toNamed(), this.named, "named -> rgb -> named conversion preserved");
});
QUnit.test("named2hex2named", function(assert) {
	assert.deepEqual(this.named.toHexString().toNamed(), this.named, "named -> hex -> named conversion preserved");
});
QUnit.test("named2hsl2named", function(assert) {
	assert.deepEqual(this.named.toHSLString().toNamed(), this.named, "named -> hsl -> named conversion preserved");
});

QUnit.module("rgb percentage handling", {
	setup: function() {
		this.rgb = "rgb(51,102,153)";
		this.rgbP = "rgb(20%,40%,60%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(this.rgbP.toRGBArray(), this.rgb.toRGBArray(), "all percents handled correctly in rgb conversion");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(this.rgbP.toHexArray(), this.rgb.toHexArray(), "all percents handled correctly in hex conversion");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(this.rgbP.toHSLArray(), this.rgb.toHSLArray(), "all percents handled correctly in hsl conversion");
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
		this.rgbSp = "rgb( 8,  214,   62     )";
		this.rgb = "rgb(8,214,62)";

		this.hslSp = "hsl(   232, 48%,    81% )";
		this.hsl = "hsl(232,48%,81%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(this.rgbSp.toRGBArray(), this.rgb.toRGBArray(), "whitespace ignored");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(this.rgbSp.toHexArray(), this.rgb.toHexArray(), "whitespace ignored");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(this.rgbSp.toHSLArray(), this.rgb.toHSLArray(), "whitespace ignored");
});
QUnit.test("rgb2named", function(assert) {
	var _rgbSp = "rgb(    240 , 128, 128  )";
	var _rgb = "rgb(240,128,128)";
	assert.deepEqual(_rgbSp.toNamed(), _rgb.toNamed(), "whitespace ignored");
});
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(this.hslSp.toRGBArray(), this.hsl.toRGBArray(), "whitespace ignored");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(this.hslSp.toHexArray(), this.hsl.toHexArray(), "whitespace ignored");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(this.hslSp.toHSLArray(), this.hsl.toHSLArray(), "whitespace ignored");
});
QUnit.test("hsl2named", function(assert) {
	var _hslSp = "hsl(  90 , 100% , 50%     )";
	var _hsl = "hsl(90,100%,50%)";
	assert.deepEqual(_hslSp.toNamed(), _hsl.toNamed(), "whitespace ignored");
});

QUnit.module("ignore extra zeroes", {
	setup: function() {
		this.rgb0 = "rgb(00251,000053,000104)";
		this.rgb = "rgb(251,53,104)";
		this.hsl0 = "hsl(0000251,0049%,060%)";
		this.hsl = "hsl(251,49%,60%)";
	}
});
QUnit.test("rgb2rgb", function(assert) {
	assert.deepEqual(this.rgb0.toRGBArray(), this.rgb.toRGBArray(), "padded zeroes ignored");
});
QUnit.test("rgb2hex", function(assert) {
	assert.deepEqual(this.rgb0.toHexArray(), this.rgb.toHexArray(), "padded zeroes ignored");
});
QUnit.test("rgb2hsl", function(assert) {
	assert.deepEqual(this.rgb0.toHSLArray(), this.rgb.toHSLArray(), "padded zeroes ignored");
});
QUnit.test("hsl2rgb", function(assert) {
	assert.deepEqual(this.hsl0.toRGBArray(), this.hsl.toRGBArray(), "padded zeroes ignored");
});
QUnit.test("hsl2hex", function(assert) {
	assert.deepEqual(this.hsl0.toHexArray(), this.hsl.toHexArray(), "padded zeroes ignored");
});
QUnit.test("hsl2hsl", function(assert) {
	assert.deepEqual(this.hsl0.toHSLArray(), this.hsl.toHSLArray(), "padded zeroes ignored");
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
/*
QUnit.module("No invalid colors");
QUnit.test("RGB invalid red", function(assert) {
	assert.throws(
		function() {
			"rgb(256,0,3)".toRGBArray();
		},
		"foo"
	);
	assert.throws(
		function() {
			"rgb(-5,2,3)".toRGBArray();
		},
		"bar"
	);
	assert.throws(
		function() {
			"rgb(20.46,2,3)".toRGBArray();
		},
		"baz"
	);
	assert.throws(
		function() {
			"rgb(880%,2%,3%)".toRGBArray();
		},
		"heh"
	);
	assert.throws(
		function() {
			"rgb(-3%,2%,3%)".toRGBArray();
		},
		"qux"
	);
});*/

QUnit.module("check unnamed colors");
QUnit.test("rgb2named", function(assert) {
	assert.deepEqual("rgb(255,235,204)".toNamed(), undefined, "No named color");
	assert.deepEqual("rgb(220,19,60)".toNamed(), undefined, "No named color");
	assert.deepEqual("rgb(254,215,0)".toNamed(), undefined, "No named color");
	assert.deepEqual("rgb(0%,0%,0.8%)".toNamed(), undefined, "No named color");
	assert.deepEqual("rgb(100%,99%,100%)".toNamed(), undefined, "No named color");
});
QUnit.test("hex2named", function(assert) {
	assert.deepEqual("#5F9EA1".toNamed(), undefined, "No named color");
	assert.deepEqual("#1E90EF".toNamed(), undefined, "No named color");
	assert.deepEqual("#88CEFA".toNamed(), undefined, "No named color");
	assert.deepEqual("#FFDDB3".toNamed(), undefined, "No named color");
});
QUnit.test("hsl2named", function(assert) {
	assert.deepEqual("hsl(31,19%,31%)".toNamed(), undefined, "No named color");
	assert.deepEqual("hsl(242,81%,66.2%)".toNamed(), undefined, "No named color");
	assert.deepEqual("hsl(256,12%,8.94%)".toNamed(), undefined, "No named color");
	assert.deepEqual("hsl(0,0%,99%)".toNamed(), undefined, "No named color");
});

QUnit.module("named colors ignore transparency");
QUnit.test("rgb2named", function(assert) {
	assert.deepEqual("rgba(0,0,0,0.0001)".toNamed(), "black", "Ignored transparency for black");
});