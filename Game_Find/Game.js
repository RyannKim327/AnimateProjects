(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Game_atlas_1", frames: [[0,722,915,230],[0,0,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Sirena5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004B68").s().p("ACxFAQgOgBgOABIAAgCQhJgignhCIgCgBIgagNIgDAAIgQAAIgBAAQgSgGgCgXQABgNAHAAIAAACQAPAVgMgYIAAAAQgDgCACgGIABgBQgQgqgGg0IAAgCQABgUgDgPIAAgCQAAhWgngwIgCgCQgagLgnABIgCAAIgRAAIAAADIgDAAIgVAAIgCAAIgwAAIgBAAQgyAAghgPQAIgBAHACIACAAQAPAEATgCQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAMABAFgFQAggfAogaQgJgCgGgHQgDgEgCgGQgThPhMgUIAAgCIALAAIACAAQCAASA7BXQAdAqAfAqQAVAbAMAkQARA1AaAqQAdAxAeAvQAGAIADAIIAOAkQAcAbA2AAIACAAIhHicIAAgCQgJgCgHgEIgCAAQgMgQgEgNIAEAAQALAOAAgOIgBAAIgZghIACAAQAJACAIAFIACAAQAoA4ApA2QARAWAMAZQASApAZAkQgBAaADAOIAAgCQAGgNAQAGIACAAIASAAIABAAIADAAQAXAJgCAhIgBABQgMATgaAGIgCAAQgWACgMgIIAAgBQgLgCgLAAIgCAAIgYgCIgBAAQgMAIgNAGIgCAAg");
	this.shape.setTransform(32.808,31.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena5, new cjs.Rectangle(0,0,65.6,63.9), null);


(lib.Sirena4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04657C").s().p("AhvCoIgBgBIAAgBQACgQgDgQIAAgBQACgJAIgIIAAgBIABgLIABgBQAHgHACgJIgWgEIgBAAQgGgFgFgGIgBgBQgIgCgGgFIAAAAIgBgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAQAOAJASgKIAAgBQgXgCgQgVQAHAEAMACQAKADALABQAWABAQAWIAEgDQAdgiAQglIgBgBQgCgJAEgIIABAAIAigfIAAgBQgGgbgCgZIACgDQAOgEgDgHQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgBIgBgBIgHgLIAAABIAAgBQgIgSALgMIABAAQALgGAJgCIABAAIAJACIAAABIABABIAGALIABABIAAACQAEALABAKIABABQAIAHAMACIABgBQANgFgJAHIgBABQAJADAKABQABAFgHgCQAIADAGAIQgPgHAPAKIAAgBQAKAEgDADQgDACALAAQgRAFgQgMIgBAAQAKAOASAEIABABIgNgBQgBAAgBAAQAAAAAAAAQAAAAABAAQABAAABAAQAMAHgKAAQAFABACACQAHAGgGgCIgBgBQgIgCgJABIgBgBQAJASARALIAAABQAOgHAMADIABAAQgJAFgQAHIgBABQgigUgdgmIAAABQAFAlAfAaIABABQACAMgIAJIgBABIgKAEIAAABQgkAIgjABIgBAAQgWAgggAdQgVASAAAYQgBAKgKAIIgIAFIgJAHIAAAAQgQANAFASIABABQgEgBgCgGgAAZgyQAAAEgGACIgIAGIgBABIgCABIgBABIgHAFIAAABIgDACIgEABIA2gFIAAgCIgGgOIAAAAIgGgLIAAAAIgBAAIgBgCIgEAAQgFAAABAKg");
	this.shape.setTransform(14.9,17.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena4, new cjs.Rectangle(0,0,29.8,35.1), null);


(lib.Sirena3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027C8F").s().p("AiqFeIgBgCIAAAAIgEgJQghhVAUhHQAHgWALgVQAaguAQgzQADgKAAgLQgGhXAXhRQADgKABgLQAGgqArggIABgBIAXgOIABAAQAYgYANgbIAAgBIAAAAIgPAJIgBABIgBAAIg0ASIgGAEIgBAAIAAAAIgLAFIABABIgBABQgHAKgPACIAAAAQACgHACgBIgBgBQgWgFgEgXQAPAOAUgDIABABIAQgJIABgBIAAAAQAPgGAKgIIABgBIAPgJQAMgDAOgIIABAAQAEAAAEgEIACgBIABAAIARgLIABAAIAMgGIABgBIAJgGIABAAIAFgDQALgCAJAGIABAAQAFgEAJgFIABgBQANACAHACIgBgCQAEAEAFAJIABABQAGACAIgDIACgBQAEADAGAAIABAAQAIgEAHgBIABAAQAPAHAMAQIABABQgBAggSAcQALAIAJAMIABABQgDANAIAIIABABQgGABgDgHIAAAAQAAgJgCgHIgBgBQgJgJgLgEIgDACQAHAJAIALIgNgIQgGgOgBABIgCABQAAAIAGAEIABABIAEAIIABACQADANgDgFQgCgGAAAFQgDAOgLALIgLAEQAFAFALABQAFABgBAEIgBABIgBgBIgBgBQgMgGgKAFQAHAJgGgDIgDADIAAABQgCgEgBgKIgBgBQgFgFABAHIAAACQADALgMAIIgBABIAAABQABAJgCgDQgDgFgCAFQgEAIABAEIgBgBQgDgKAIgIIAAgBQgCgKADgJIgDACQgNAJALgKQAEgGgJAHQgOALgSAHIAAABQgDAFADAIQAAAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAQgMAWgLAcIAAABQAEAQAMAQIAAABQgFABgEgGQAEAVgHgUIgBgDIgHASIgBAAQAAgNgGAGIAAAAQgBgIAFgKIgBgCQgHgGABALQgIgIAGgKIACgCQAMgVAAgZQAAgUAJgSQAIgPAEgLQgGADgEAFQgHAJgBgFIABgCIACgCQASgNAJgNIAAAAIgRAFIgEABIgBABIAAgBIgLAHIABAAQgLASgBAVIgCAHQgFAEgEAEIAAAAIgNAIIgBABIgBAAQgQAJgNgDIgPAJIgBABQgqBLgGBVQgBADACAGIAJANIAAAAQBABWBTAMQA1AIA9gSIABACQhVAghMgCQgKAAgLgDQgegFggAAQgZAPgOAQIghAlQg5A9AcBUQgFgFgFgKgAB2jBQgIAFACAIIgBACQAMgCgEgOIgBABgABPjBIgFAIIgBABQAIACgBgLIgBAAgABajFQgFAGgCAHIABAAQAHgBAAgMIgBAAgABojSQgMALAGAGIABgBQAIgHgCgKIgBABgABzjJQgCAMADgNIgBABgACMjNQgHAIAIgIIgBAAgABvjRQADANgCgOgACAjTIAAACQAEAAAAgKQgEAEAAAEgACPjaQgEALAGgMIgCABgACYjdQgBALACgLIgBAAgACNjhQgDAMAEgNIgBABgACbjxQACAJABALIAAAAQAJgHgMgNgABSllQgEACAAABQgBAGAEgCQAPgIgKAAIgEABg");
	this.shape.setTransform(19.6726,36.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena3, new cjs.Rectangle(0,0,39.4,73.1), null);


(lib.Sirena2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027997").s().p("AigBlIAAgCIAAgSIAAgBIAAgGQARhNBBgwIAAAAQAEgkAbgTQAdgVADgkQAFAVgJATIAAABQAdgUAVAKQACABgHAAIAAgBIgMADIAAACIgBAAQgMAGgDALQADAAAOgHIAKgEQAEABAIgFIAAAAQAUgHAGgRIACgBQABgPgEgJIAAAAQAMAHAEAQIAAABIAAAKIAAABIAAACQgEAcgXAQIgBAAQgSAGgPABIAAAAIgRAFIACACIAAAAQAOAAANACIAAABQAhgIAOgVIABgBQgHAWgPAOIgBABIgBAAQgHAHgKAFQAJgDAKgHIABgBIANgJIACgBIAJgDIADAAQAVgIAKAIIABAAIgSACIgBAAIAAAAQgFAAgGADIAAABIgBAAQgfAWgVAbIAAABQAVgBAIAQQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAgBQgEgFgHAAQgbgEggAFQAJALANABIACAAIAAAAQgHADgFABQgJABgHgDQgIgCgEgIQgMgYghADIgBAAQgjAcgLArIAAAJIAAACIABALIABAAQAJBBBOgZQAKgDAJABQAJABAHADQAJgBAEgEIABgBIABAAQAGgGgLAFIgBAAQgIABgEgEQAHABAIgCIACAAIABgBQAGgGgMAFIgBABIgCAAIAAgBIAGgDIAAAAIABgBQgIgJgPgIIAAgCIACAAQAMAEAMAGIABAAQAMABgKgDIgBAAIAAAAQgJgHgJgIQAIABAEAEIAAABIABAAQAMAHgNgJIAAgBIgGgMIAAgCQAFAKAKAFIAAgBQgCgKAKgJIAAAAIACgBQAFADADgLIAAgCIABAAIAAABIABAEIACAAIgBABIgCABQANAAgBgPIgBABIAAgCQAEgDACgFIAAgCIABAAIACgCIABABIAAABQAIADAGgMIAIgNQAOgUAYgMIAMgEIACgBQAJACAHAHIABAAQABAIAAAKIAAABQgFAKgCALIABgBQAJAGgJANIAAABQgKAIgEANIgBAAIAKAwIAAABQAJAEAEAJIABABQgIgCgIANIgBAAQgPAFgIgFIgBgBQgUALgWAKIgBABIgBABIgPAEIgBAAQgOAFgCgJIgBABQgNAJgTAGIgCABIghALIgCABQgWAEgSAAQhLAAgThKgABuBUQgHAQgLALIgBAAQgGAEgHADQADACAFgCIABAAQAGAAAJgFIAAAAIABAAQAMgFAIgHIgBAAQgJgIgCgJgAAbA7QAAAHAGAAQAIgBgBgEQgEgGgDAAQgDAAgDAEgAAkA0QAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAJgEgDAAIgLACgAAkAxIAAABIAHgDIgHACgAAzAsIAAAAIAHgHIgHAHgAA+AeIAAABIAGgEIgGADgAA9AZIAAABIAHgFIgHAEg");
	this.shape.setTransform(16.1,17.5201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena2, new cjs.Rectangle(0,0,32.2,35.1), null);


(lib.Sirena1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004363").s().p("AgwFRIAAAAIgTgBIgCAAIgKAAIgBAAQgTADgYgCIAAAAQgHgEgDgHIAAgCQABgPgDgLIAAAAQgNgIgVAAIAAABQgJAFgLADIgBAAQgEgFgGgDIAAgBQgFgGgGgFIABgBQADgOgFgQIAAgCIAAgKIAAgBIAAgCQACAGACgGIAAgBQADgDABgFIABAAQAGADgDgEIAAgCQALgDAHgIIAAgBQAGACAAACIABAAIAGAAIABAAQAEACABgDIABgBIAAgCQACgBALAAIACAAIAAABIgCAAQgFAAgDACQADACAFgBIACAAQABACAEAAIABgBQAJABAEgLQACgIAIgDQAqg0A8glIAAAAQACgGABgIIAAgBQAKgOAIgIIABAAQAAAHAIgHQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABQAHADgBAGQgDAVgGAQIgQADIgCAAQgbAageAYIgBAAQgIAVgMAQIgBAAQAGABAKgBIACAAIALAAIABAAIAgAAIACAAIAPgBIAAAAQARgCALgKQAPgQATgNQAHgFAJgBQA5gFASgqQAJgUgDgeQgEgtgVgdQgDgDgDgCIgogYQgNgJgSgDQg0gIgogTQhSglg1hCQAbATAaATQAKAIAQADQAJABALgBIALAAIAAgBQAPgDAQgBIACAAIALAGIABABQAQABAKgFIABAAQALABAHgDIAAAAIAAgBQgEgMABgRQAJgRAAgZIAAgCIAAgBIAAgNIAAgBQAKgMAHgPIABgBIAAAAQABgIgBgFIAAgCIAAgGIAAgBIAAgTIAAgBIAAgDQADgXAMgPQAAAJgDAMIAAABIgBAAIAAAKIAAABQAAAsARAbQAaAoAMA4QAEASACAVQAcAfAWAlQAhAyAIBMIAAAbIAAACQgEAkgOAZQgqBNhgAVQgyALgoASIgBABIgEABQADACAFgCIAAAAIACAAIACAAIAQAAIABAAQAdAGAfAEQAFABALgBQAUgDAVACIAAABQgDAJgMACIAAABQATgDAOADIABAAQgFAIgMAAIgCAAIgBAAIgJAAIAAABIgBAAQgLAAgJgCIAAgBIgMgBIgBAAIgNAAIAAACIgBAAIgFAAIgBAAIgJAAIAAABIgBAAQgTADgRAAQgYAAgWgGg");
	this.shape.setTransform(21.3,34.3434);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena1, new cjs.Rectangle(0,0,42.6,68.7), null);


(lib.Sirena = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("ADPCUQgFgYgagDIAAgBIgOgBIgMgBQgQgCgHgLQgQgaghgGQg3gLgrgUIgBAAQgmAVgsAOIgBAAIgOAAIgBAAQgQgFgFgQIABgBQASgvgTgrIAAAAQgIA6gYAqIgCAAQgWADgNAAIACAAQAKgMAUgBIAAgBQAKgWAAgZIgBABQgLAFgGAHIgBABQgFAHAEgLQABgEADgEIABgBQgLAHAJgPQAFgDgFADIgNAIIAAAAQASgQACgVIgBAAQgKAYgVAFQAMgHgFgBQgGAAAJgLIABAAQAJgUgMATQACgNAHgJQgGAHgDgHQALgIAIgJIgCAAQgOgCASgCIABAAQALgJAFgOIABgBQgGgMgCgOIgBgCIAAgCIAAgQIAAgCIAAgBIAIgHIABgBQALgDAPgBIABAAQAWAGACAYIAAABIgCAAIAAAQIAAABIAAABQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQABAKASgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQANAeALAgIABACIA5ALIABAAQAJAGADAKIAAABQAoAhA2ASQACABAEAAQAEgiAWgPQAMgHAKgJQALgKAFgJQgFAggXAQIAAABQAbABAJgUIABgBQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBADIAAABQgDAJgHAFIAAADQgCAKgEAJIgCABIgUASQAIAHAMAEIACAAIAHAMIABACQANACAIAKIAAAAQAIAUAMAQIAAABIAAACQACAHgEAEIAAgBgAhcAAIABAAIABASIABACIA/gcIgEAAIgFABIAAgBIgNgBIgCAAIgDAAIgBAAIgMgBQgIACgDgGQgGgPgIAKIAAACIAAABIgCAAIABAQg");
	this.shape.setTransform(20.9725,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sirena, new cjs.Rectangle(0,0,42,29.8), null);


(lib.mgaisda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#035676").s().p("AgJgGIAMAHIAEABIACAEIgSgMg");
	this.shape.setTransform(0.95,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#227CB3").s().p("AhTFMIgBgCQAJgPADghQADgkgRgRQBkgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhJAAIgcgBgAinEXIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAiGEJQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAgmDPIgBgCQAJgPADghQADgkgRgRQBkgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhJAAIgcgBgAE3DKIgBgCQAJgPADghQADgkgRgRQBlgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhKAAIgcgBgAh6CaIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAhZCMQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAlmDFIgBgCQAJgPADghQADgkgRgRQBlgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhKAAIgcgBgADjCVIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAEECHQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAm6CQIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAmZCCQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAnQA/IAAgCIAAAAIAAgBIACgDQAHgQADgcQADgjgSgRIACAAIgBgBQBlgOAqA6IABABQAkgbArgIIACAAIgBABIABAAQgHAIgHALIgNAXIAAACQAMATAPARIAAACIAAAAIAAABQgwgEgigfIgCgBQglAuhKAAIgcgBgAiAA+IgBgCQAJgPADghQADgjgRgRQBlgOApA6IABABQAkgbArgIIACAAQgNAPgOAcIAAACQAMATAPARIAAACQgwgEghgfIgCgBQgkAuhKAAIgcgBgAChA9IAAgCQAJgPADghQADgjgSgRQBmgOApA6IACABQAkgbAqgIIADAAQgOAPgNAcIgBACQAMATAPARIABACQgwgEgigfIgCgBQglAuhKAAIgcgBgABOALIgBgCQATgQAWgMIAAgDIAUgLIADAAQAOAWAAAVQAAAWgOAXIAAACQgmgRgZgdgABugDQAAAKAGACIACAAIAAgCQAIACABgGIAAgDQAAgIgGAAQgEAAgHAFgAohALIgCgCIAAgCQAbgWAigRIACAAIABABIABAAQAbAqgbAsIAAACQgmgRgZgdgAoBgDQAAAGACADIADABQAKADAAgGQABgIgCgEIgDAAQgEAAgHAFgAjUAJIAAgCQAbgWAigRIACAAQAcApgbAsIgBACQglgRgagdgAizgEQgBAJAHACQAKADAAgGQABgOgGAAQgEAAgHAGgAlmhIIgBgCQAJgPADghQADgkgRgRQBlgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhKAAIgcgBgAm6h9IAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAmZiLQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAFGhSIgBgCQAJgPADghQADgkgRgRQBlgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhKAAIgcgBgAgmhXIgBgCQAJgPADghQADgkgRgRQBkgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhJAAIgcgBgADyiHIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAETiVQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAh6iMIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAhZiaQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGgAhTjjIgBgCQAJgPADghQADgkgRgRQBkgOAqA7IABABQAkgcArgIIACAAQgNAPgOAdIAAACQAMATAPARIAAACQgwgEghgfIgCgBQglAuhJAAIgcgBgAinkYIAAgCQAbgXAigRIACAAQAcAqgbAsIgBACQglgRgagdgAiGkmQgBAKAHACQAKADAAgGQABgPgGAAQgEAAgHAGg");
	this.shape_1.setTransform(57.675,40.4683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mgaisda, new cjs.Rectangle(0,0,112.5,73.8), null);


(lib.mgacorals = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mgacorals, new cjs.Rectangle(0,0,457.5,115), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mgaisda3 = new lib.mgaisda();
	this.mgaisda3.name = "mgaisda3";
	this.mgaisda3.setTransform(112.8,87.35,1,1,0,0,0,56.2,36.9);

	this.mgaisda2 = new lib.mgaisda();
	this.mgaisda2.name = "mgaisda2";
	this.mgaisda2.setTransform(-112.9,1.45,1,1,0,0,0,56.2,36.9);

	this.mgaisda1 = new lib.mgaisda();
	this.mgaisda1.name = "mgaisda1";
	this.mgaisda1.setTransform(81.7,-87.35,1,1,0,0,0,56.2,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mgaisda1},{t:this.mgaisda2},{t:this.mgaisda3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-169.1,-124.2,338.2,248.5), null);


// stage content:
(lib.Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Animate Horizontally
		Moves the symbol instance left or right across the stage by decreasing or increasing its x property within an Tick event.
		
		Instructions:
		1. The default direction of the animation is to the right.
		2. To change the direction of the animation to the left, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance moves, change the number 10 below to the number of pixels you want the symbol instance to move in each frame.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		this.addEventListener("tick", fl_AnimateHorizontally_2.bind(this));
		
		function fl_AnimateHorizontally_2()
		{
			while(true){
				this.isda1.x+=10;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Leafs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E8A41").s().p("AgoE4IAAgDQg9gDg8AAQgDAAgCgCQg1gwBaASQAgAAgbgHQhggagqhLIAAgHQAFgWgFgQQAkAfAVABIAAgNQgigqgQg8IgBgGIAAgGIAAg5IAAgGIAAgGQAigCAEA6IAAAGQAQAkgGg8IgEAAIAAgHIAAhGQAXgkAOAlQACACAAAEQAAApACApIAEAAIAAAmIAAAGIgGAAQAAAcACAdIAEAAQAFA7AhAVIAAgKQgSg7AlALIAAAEQAUA4AhAsQAAAAABABQAAAAABAAQAAAAABAAQABABABAAQgChLgsggIgFgCQAAgDgCgCQgjgpgChKQABAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAIgjgMgVIgBgFQgxhXgzhWQAjgGAWAcIADgIQAHgXAWAPQADBSApADIANAFQAjAXgVA2QgBACAAADIgHAAQgFA3AMAhIADgEQAIgNgFgaIAAgHIAAgGQAoAFgNBVQgIA1AagEIADgBQAIgtgLgeIgBgHQgQhagChqQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgbgjAAg7QAngpAGBPQADAcAPgPQARg9AdguQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQATBkg3BWIgBAFIgGAAQAAApADAqIADAAQAeANAQhEQAMgzAIg8QAGg5ASgsQABgDAEgEQAjAdgaA7QgUAwAEArQAXgpAdgiQACgCADAAQABBWg+A5QgUASgIAeIgDABQgEARgMAHIAAAGQALgBgEAOIAAAGQAGgZALgTIACgGIAFABQABACAAADQAAAZADAZIADAAQAbgbAOgpQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQgJg7AigOIAAADIAAAzIAAAHIAAAGQgUBagrBEQAGA+Aug9QAmgwAFhPIAEgBQAIgqgMgbIAAgHIAAgZQAEhAAgAKQACAAAAAJIAAAUIgGAAQgCA6AOguIABgGQAAgGADgFQAMgPADAPQAMA6gZA5QglBVAGBAQAHgJADgKQAShAAqglIABAGQAOBEgiA1QgDAAgCABQgUAIgNAQQhSAHgtAsQgkAiAKARQAigEARgVQAyg6BHgGIgBAGQgRAhghASQgDAAgCACQgdAWA1gFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQhYA7h4AAIgTAAgAAECfIAAAHQALgogFg4IAAgGIgGAAIAABfgAAkCTIAAAGIADgBQAIgxgLghIAABNg");
	this.shape.setTransform(225.9792,365.9431);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Corals
	this.instance = new lib.mgacorals();
	this.instance.setTransform(298.1,342.5,1,1,0,0,0,228.7,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33BBD0").s().p("AhtBcQAkgLAPghIAAgBQgXgBgLAMIgBABIgCgBIgBgBIABgCQAOgNAZgBIABgCIAjgcIgBAAQgggBgVAJIAAABQgWAbgpAHIgCABQgKACAAgGQAcgDATgMIABgBIACgBQASgLgWAEIAAACIgDAAQgXAGgcADIAAAAQgFAAABgGIACAAIAAgBIACAAIAWgCIAAAAIBKgRQAFgCADgDIAjAAIACAAQAQADATAAIACABQADAEAHABIAAAAQAkABAcgHIADAGIgVADQgZACgJAQIAAABQAdgHAegEIACAFQgHAAgIADIgGAHQgJAPgBgKIAAgDQAEgJgWAIIgDAAQgJAAgEgFIgBACQgSAJgYAEQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQALgIARgCIAAgCQASgJgCgJIgCAAQg2ANgbApIgBAAQgKACgMgBQgMAGgJAIQgHAFgHAAQgFAAgEgDgAgMANQgNAMgPAKIAAACQgGARgKAMIgBABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAGAJgDIAAgCIACAAQARgPANgUIACAAQATgGAQgKIgCAAQgLgGgQAAIgCAAgAg1ArIAAACQAIgFgCAAIgGADgAhXATIAAABIAJgEIgJADgACDAYIARgBIAAgBIgNgFIAHgMQAWAGAYAEIACAAIACAAIgEAKIgUAAIgCAAQgOAEgSAAIgBABIgHAIIAFgOgACUAQQAEADAMAAIACAAQgBgGgGAAQgEAAgHADgAB4AHQgKgGgHgLIABAAIAAAAIABACIAYAJIgGAGIgBAAIAAABIgCgBgAiRAHIAAgCIAUgJIACAAIAegBIAAgBQAJABAFgFIABAAIAEgEIAAgCQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIATgPIgDAAQgPAEgUAAQAAAFAEABIACAAIgBACIgBAAQgMgGgMAFQgfANghgGIAOgEIACAAIASgBIAAgBQAjgEgXgPIAAgCIgWgBIgCAAQgSgFgQgHIAAgBQgDgCgBgDIAGAAIACAAQANAGAPAEIACAAQAHAEAMgCIABgCQALgCAHgFIACAAIAdAAIADAAIADAAIADAAQAuAMAoASIAHAFQAPAPAegBIACAAQgTgFgNgKQgRgNgHgMIARAKQAaAPAWARIADAAQALACAIAEQgDAHgDgIIAAABIADAGQgJgHgQgBIgBAAIAAgBIg2gBIAAACQgLABgJgCQgUgDgXABQggABgeAHIgBAAIgWAAIAAACIgCAAQgEgBgCADIgCAAgAgogMIACAAQAjAMAigKIgBgBQgVgXgtAAIAAACQgSAFgLALIgDAAQAJAHARgDIACAAgAh9gsIAAACQAlAOA2gMIAAgBQghgPgnACIgBAAQgIAGgKAEgABfgEQgmgWgigZQgfgIgmgDQgggCgVgSIgCAAIgBAAIgPgCIgBgBIgTAAIAAABIgCAAQgRAAgNAFIgCAAQgJABgFgEIABAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAHgEALgBIAAAAIAYgCIAAgBQASgCAUAAIACAAIALAGIADAAQAGAGAKAEIACAAQAmAOAwAEQAQACAMAHQAXAUAZASIACABQgBgMgEgQIAAAAQAJAJAEAQIgBAAQgDAFgCAHIAAAAIgCgBgAAogpIABABQACgLgQgDIANANgAiBhZQACADAGgBQAGgBADgCQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAgBAAIgQADg");
	this.shape_1.setTransform(138.9125,338.7985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	// layer_ng_isda
	this.isda1 = new lib.Symbol1();
	this.isda1.name = "isda1";
	this.isda1.setTransform(316.8,218.85);

	this.timeline.addTween(cjs.Tween.get(this.isda1).wait(1));

	// Mermaid
	this.sirena6 = new lib.Sirena5();
	this.sirena6.name = "sirena6";
	this.sirena6.setTransform(273.45,98.7,1,1,0,0,0,32.8,31.9);

	this.sirena5 = new lib.Sirena4();
	this.sirena5.name = "sirena5";
	this.sirena5.setTransform(514.5,93.45,1,1,0,0,0,14.9,17.5);

	this.Sirena4 = new lib.Sirena3();
	this.Sirena4.name = "Sirena4";
	this.Sirena4.setTransform(43.95,55.15,1,1,0,0,0,19.7,36.6);

	this.sirena3 = new lib.Sirena2();
	this.sirena3.name = "sirena3";
	this.sirena3.setTransform(146.05,116.5,1,1,0,0,0,16.1,17.5);

	this.sirena2 = new lib.Sirena1();
	this.sirena2.name = "sirena2";
	this.sirena2.setTransform(300.05,227.05,1,1,0,0,0,21.3,34.4);

	this.sirena1 = new lib.Sirena();
	this.sirena1.name = "sirena1";
	this.sirena1.setTransform(128.85,325.4,1,1,0,0,0,20.9,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sirena1},{t:this.sirena2},{t:this.sirena3},{t:this.Sirena4},{t:this.sirena5},{t:this.sirena6}]}).wait(1));

	// background
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(0,1,0.4295,0.5485);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(275,201,274.79999999999995,199);
// library properties:
lib.properties = {
	id: '7BA2B981EBCB39418CFD593C44505243',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Game_atlas_1.png?1707645612719", id:"Game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7BA2B981EBCB39418CFD593C44505243'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;