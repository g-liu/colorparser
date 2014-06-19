QUnit.test("hello world", function(assert) {
	"#abcdef".toRGBArray();
	expect(0);
});

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
