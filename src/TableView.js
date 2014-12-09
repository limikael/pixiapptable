var PixiApp = require("pixiapp");
var PIXI = require("pixi.js");
var inherits = require("inherits");

function TableView() {
	PixiApp.call(this, 640, 960);
	this.backgroundColor = 0xcccccc;

	this.table = PIXI.Sprite.fromImage("./img/table_top.png");
	this.addChild(this.table);

	this.on("resize", this.onResize.bind(this));
}

inherits(TableView, PixiApp);

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
}

TableView.prototype.setupPortrait = function() {
	this.applicationWidth = 640;
	this.applicationHeight = 960;

	this.table.rotation = 0;
	this.table.position.x = 0;
	this.table.position.y = 0;
}

module.exports = TableView;