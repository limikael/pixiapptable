var PIXI = require("pixi.js");
var inherits = require("inherits");

function SliderView() {
	PIXI.DisplayObjectContainer.call(this);

	this.center = new PIXI.Sprite.fromImage("./img/slider/slider_back.png");
	this.addChild(this.center);

	this.left = new PIXI.Sprite.fromImage("./img/slider/sliderback_left.png");
	this.addChild(this.left);

	this.minus = new PIXI.Sprite.fromImage("./img/slider/slider_minus.png");
	this.addChild(this.minus);

	this.right = new PIXI.Sprite.fromImage("./img/slider/sliderback_right.png");
	this.addChild(this.right);

	this.plus = new PIXI.Sprite.fromImage("./img/slider/slider_plus.png");
	this.addChild(this.plus);
}

inherits(SliderView, PIXI.DisplayObjectContainer);

SliderView.prototype.setWidth = function(w) {
	this.right.position.x = w - this.right.width;
	this.plus.position.x = w - this.plus.width;

	this.center.position.x = this.left.width;
	this.center.width = w - this.left.width - this.right.width;
}

module.exports = SliderView;