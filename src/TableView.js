var PixiApp = require("pixiapp");
var PIXI = require("pixi.js");
var inherits = require("inherits");
var SliderView = require("./SliderView");

function TableView() {
	PixiApp.call(this, 640, 960);
	this.backgroundColor = 0xcccccc;

	this.table = PIXI.Sprite.fromImage("./img/table_top.png");
	this.addChild(this.table);

	this.sliderView = new SliderView();
	this.addChild(this.sliderView);

	this.on("resize", this.onResize.bind(this));

	this.loadAssets();
}

inherits(TableView, PixiApp);

TableView.prototype.loadAssets = function() {
	var assets = [
		"./img/table_shadow.png",
		"./img/table_top.png",
		"./img/chip_blue_big_1.png",
		"./img/slider/sliderback_left.png",
		"./img/slider/slider_minus.png",
		"./img/slider/sliderback_right.png",
		"./img/slider/slider_plus.png",
		"./img/slider/slider_back.png",
		"./img/slider/slider_glow0.png",
		"./img/slider/slider_glow1.png",
		"./img/slider/slider_glow2.png",
		"./img/slider/slider.png",
		"./img/plate_base.png",
		"./img/plate_player.png",
		"./img/potbet_50.png",
		"./img/potbet_75.png",
		"./img/potbet_100.png",
		"./img/menu.png",
		"./img/slider/slider_minus_down.png",
		"./img/slider/slider_plus_down.png",
		"./img/chips_white_small_2.png",
		"./img/plate_timer.png",
		"./img/pot0.png",
		"./img/PXM_cards.png"
	];

	var assetLoader = new PIXI.AssetLoader(assets);

	assetLoader.addEventListener("onComplete", this.onResize.bind(this));

	assetLoader.load();
}

TableView.prototype.onResize = function() {
	if (this.visibleRect.width > this.visibleRect.height)
		this.setupLandscape();

	else
		this.setupPortrait();

}

TableView.prototype.setupLandscape = function() {
	this.applicationWidth = 960;
	this.applicationHeight = 640;

	this.table.rotation = -Math.PI / 2;
	this.table.position.x = 0;
	this.table.position.y = 640;

	this.sliderView.position.x = this.visibleRect.x + this.visibleRect.width - this.sliderView.height;
	this.sliderView.position.y = this.visibleRect.y + this.visibleRect.height;

	this.sliderView.setWidth(this.visibleRect.height);
	this.sliderView.rotation = -Math.PI / 2;
}

TableView.prototype.setupPortrait = function() {
	this.applicationWidth = 640;
	this.applicationHeight = 960;

	this.table.rotation = 0;
	this.table.position.x = 0;
	this.table.position.y = 0;

	this.sliderView.position.x = this.visibleRect.x;
	this.sliderView.position.y = this.visibleRect.y + this.visibleRect.height - this.sliderView.height;

	this.sliderView.setWidth(this.visibleRect.width);
	this.sliderView.rotation = 0;
}

module.exports = TableView;