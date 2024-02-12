(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
	this.shape.graphics.f("#32A7F4").s().p("ACxFAQgOgBgOABIAAgCQhJgignhCIgCgBIgagNIgDAAIgQAAIgBAAQgSgGgCgXQABgNAHAAIAAACQAPAVgMgYIAAAAQgDgCACgGIABgBQgQgqgGg0IAAgCQABgUgDgPIAAgCQAAhWgngwIgCgCQgagLgnABIgCAAIgRAAIAAADIgDAAIgVAAIgCAAIgwAAIgBAAQgyAAghgPQAIgBAHACIACAAQAPAEATgCQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAMABAFgFQAggfAogaQgJgCgGgHQgDgEgCgGQgThPhMgUIAAgCIALAAIACAAQCAASA7BXQAdAqAfAqQAVAbAMAkQARA1AaAqQAdAxAeAvQAGAIADAIIAOAkQAcAbA2AAIACAAIhHicIAAgCQgJgCgHgEIgCAAQgMgQgEgNIAEAAQALAOAAgOIgBAAIgZghIACAAQAJACAIAFIACAAQAoA4ApA2QARAWAMAZQASApAZAkQgBAaADAOIAAgCQAGgNAQAGIACAAIASAAIABAAIADAAQAXAJgCAhIgBABQgMATgaAGIgCAAQgWACgMgIIAAgBQgLgCgLAAIgCAAIgYgCIgBAAQgMAIgNAGIgCAAg");
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
	this.shape.graphics.f("#323B6A").s().p("AiqFeIgBgCIAAAAIgEgJQghhVAUhHQAHgWALgVQAaguAQgzQADgKAAgLQgGhXAXhRQADgKABgLQAGgqArggIABgBIAXgOIABAAQAYgYANgbIAAgBIAAAAIgPAJIgBABIgBAAIg0ASIgGAEIgBAAIAAAAIgLAFIABABIgBABQgHAKgPACIAAAAQACgHACgBIgBgBQgWgFgEgXQAPAOAUgDIABABIAQgJIABgBIAAAAQAPgGAKgIIABgBIAPgJQAMgDAOgIIABAAQAEAAAEgEIACgBIABAAIARgLIABAAIAMgGIABgBIAJgGIABAAIAFgDQALgCAJAGIABAAQAFgEAJgFIABgBQANACAHACIgBgCQAEAEAFAJIABABQAGACAIgDIACgBQAEADAGAAIABAAQAIgEAHgBIABAAQAPAHAMAQIABABQgBAggSAcQALAIAJAMIABABQgDANAIAIIABABQgGABgDgHIAAAAQAAgJgCgHIgBgBQgJgJgLgEIgDACQAHAJAIALIgNgIQgGgOgBABIgCABQAAAIAGAEIABABIAEAIIABACQADANgDgFQgCgGAAAFQgDAOgLALIgLAEQAFAFALABQAFABgBAEIgBABIgBgBIgBgBQgMgGgKAFQAHAJgGgDIgDADIAAABQgCgEgBgKIgBgBQgFgFABAHIAAACQADALgMAIIgBABIAAABQABAJgCgDQgDgFgCAFQgEAIABAEIgBgBQgDgKAIgIIAAgBQgCgKADgJIgDACQgNAJALgKQAEgGgJAHQgOALgSAHIAAABQgDAFADAIQAAAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAQgMAWgLAcIAAABQAEAQAMAQIAAABQgFABgEgGQAEAVgHgUIgBgDIgHASIgBAAQAAgNgGAGIAAAAQgBgIAFgKIgBgCQgHgGABALQgIgIAGgKIACgCQAMgVAAgZQAAgUAJgSQAIgPAEgLQgGADgEAFQgHAJgBgFIABgCIACgCQASgNAJgNIAAAAIgRAFIgEABIgBABIAAgBIgLAHIABAAQgLASgBAVIgCAHQgFAEgEAEIAAAAIgNAIIgBABIgBAAQgQAJgNgDIgPAJIgBABQgqBLgGBVQgBADACAGIAJANIAAAAQBABWBTAMQA1AIA9gSIABACQhVAghMgCQgKAAgLgDQgegFggAAQgZAPgOAQIghAlQg5A9AcBUQgFgFgFgKgAB2jBQgIAFACAIIgBACQAMgCgEgOIgBABgABPjBIgFAIIgBABQAIACgBgLIgBAAgABajFQgFAGgCAHIABAAQAHgBAAgMIgBAAgABojSQgMALAGAGIABgBQAIgHgCgKIgBABgABzjJQgCAMADgNIgBABgACMjNQgHAIAIgIIgBAAgABvjRQADANgCgOgACAjTIAAACQAEAAAAgKQgEAEAAAEgACPjaQgEALAGgMIgCABgACYjdQgBALACgLIgBAAgACNjhQgDAMAEgNIgBABgACbjxQACAJABALIAAAAQAJgHgMgNgABSllQgEACAAABQgBAGAEgCQAPgIgKAAIgEABg");
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
	this.shape.graphics.f("#023CA3").s().p("AigBlIAAgCIAAgSIAAgBIAAgGQARhNBBgwIAAAAQAEgkAbgTQAdgVADgkQAFAVgJATIAAABQAdgUAVAKQACABgHAAIAAgBIgMADIAAACIgBAAQgMAGgDALQADAAAOgHIAKgEQAEABAIgFIAAAAQAUgHAGgRIACgBQABgPgEgJIAAAAQAMAHAEAQIAAABIAAAKIAAABIAAACQgEAcgXAQIgBAAQgSAGgPABIAAAAIgRAFIACACIAAAAQAOAAANACIAAABQAhgIAOgVIABgBQgHAWgPAOIgBABIgBAAQgHAHgKAFQAJgDAKgHIABgBIANgJIACgBIAJgDIADAAQAVgIAKAIIABAAIgSACIgBAAIAAAAQgFAAgGADIAAABIgBAAQgfAWgVAbIAAABQAVgBAIAQQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAgBQgEgFgHAAQgbgEggAFQAJALANABIACAAIAAAAQgHADgFABQgJABgHgDQgIgCgEgIQgMgYghADIgBAAQgjAcgLArIAAAJIAAACIABALIABAAQAJBBBOgZQAKgDAJABQAJABAHADQAJgBAEgEIABgBIABAAQAGgGgLAFIgBAAQgIABgEgEQAHABAIgCIACAAIABgBQAGgGgMAFIgBABIgCAAIAAgBIAGgDIAAAAIABgBQgIgJgPgIIAAgCIACAAQAMAEAMAGIABAAQAMABgKgDIgBAAIAAAAQgJgHgJgIQAIABAEAEIAAABIABAAQAMAHgNgJIAAgBIgGgMIAAgCQAFAKAKAFIAAgBQgCgKAKgJIAAAAIACgBQAFADADgLIAAgCIABAAIAAABIABAEIACAAIgBABIgCABQANAAgBgPIgBABIAAgCQAEgDACgFIAAgCIABAAIACgCIABABIAAABQAIADAGgMIAIgNQAOgUAYgMIAMgEIACgBQAJACAHAHIABAAQABAIAAAKIAAABQgFAKgCALIABgBQAJAGgJANIAAABQgKAIgEANIgBAAIAKAwIAAABQAJAEAEAJIABABQgIgCgIANIgBAAQgPAFgIgFIgBgBQgUALgWAKIgBABIgBABIgPAEIgBAAQgOAFgCgJIgBABQgNAJgTAGIgCABIghALIgCABQgWAEgSAAQhLAAgThKgABuBUQgHAQgLALIgBAAQgGAEgHADQADACAFgCIABAAQAGAAAJgFIAAAAIABAAQAMgFAIgHIgBAAQgJgIgCgJgAAbA7QAAAHAGAAQAIgBgBgEQgEgGgDAAQgDAAgDAEgAAkA0QAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAJgEgDAAIgLACgAAkAxIAAABIAHgDIgHACgAAzAsIAAAAIAHgHIgHAHgAA+AeIAAABIAGgEIgGADgAA9AZIAAABIAHgFIgHAEg");
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
	this.shape.graphics.f("#32A7EC").s().p("AgwFRIAAAAIgTgBIgCAAIgKAAIgBAAQgTADgYgCIAAAAQgHgEgDgHIAAgCQABgPgDgLIAAAAQgNgIgVAAIAAABQgJAFgLADIgBAAQgEgFgGgDIAAgBQgFgGgGgFIABgBQADgOgFgQIAAgCIAAgKIAAgBIAAgCQACAGACgGIAAgBQADgDABgFIABAAQAGADgDgEIAAgCQALgDAHgIIAAgBQAGACAAACIABAAIAGAAIABAAQAEACABgDIABgBIAAgCQACgBALAAIACAAIAAABIgCAAQgFAAgDACQADACAFgBIACAAQABACAEAAIABgBQAJABAEgLQACgIAIgDQAqg0A8glIAAAAQACgGABgIIAAgBQAKgOAIgIIABAAQAAAHAIgHQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABQAHADgBAGQgDAVgGAQIgQADIgCAAQgbAageAYIgBAAQgIAVgMAQIgBAAQAGABAKgBIACAAIALAAIABAAIAgAAIACAAIAPgBIAAAAQARgCALgKQAPgQATgNQAHgFAJgBQA5gFASgqQAJgUgDgeQgEgtgVgdQgDgDgDgCIgogYQgNgJgSgDQg0gIgogTQhSglg1hCQAbATAaATQAKAIAQADQAJABALgBIALAAIAAgBQAPgDAQgBIACAAIALAGIABABQAQABAKgFIABAAQALABAHgDIAAAAIAAgBQgEgMABgRQAJgRAAgZIAAgCIAAgBIAAgNIAAgBQAKgMAHgPIABgBIAAAAQABgIgBgFIAAgCIAAgGIAAgBIAAgTIAAgBIAAgDQADgXAMgPQAAAJgDAMIAAABIgBAAIAAAKIAAABQAAAsARAbQAaAoAMA4QAEASACAVQAcAfAWAlQAhAyAIBMIAAAbIAAACQgEAkgOAZQgqBNhgAVQgyALgoASIgBABIgEABQADACAFgCIAAAAIACAAIACAAIAQAAIABAAQAdAGAfAEQAFABALgBQAUgDAVACIAAABQgDAJgMACIAAABQATgDAOADIABAAQgFAIgMAAIgCAAIgBAAIgJAAIAAABIgBAAQgLAAgJgCIAAgBIgMgBIgBAAIgNAAIAAACIgBAAIgFAAIgBAAIgJAAIAAABIgBAAQgTADgRAAQgYAAgWgGg");
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


(lib.fishes = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.fishes, new cjs.Rectangle(0,0,112.5,73.8), null);


(lib.Dahon1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0E7743").s().p("AgBDOIAAgFQADgjgHgXIgBgFQgGgYgZgHQgNACgDAJQgVBHhQAIIABgEQATgWAZglQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQgpgSgMgvIAAgEIAAgkIAAgFQgCgUAQgBIAAADQgDBFAwARIAEAAQA4ABAZgKIAAgFQgQgsgmgXIAAgEQgNgggXgWIgEAAQgmgDgVgTIgBgEQgNgVAFgmQAlAgA1APIAAgCQgDhFAQhCIABgFQASgHAEAeIAAAEIAAAgIAAAEIgBAEIgDAFIAAAOIAAAEIgFAAQAAAeACAdIADAAQARA4AVg4IACAAIgHhaIADAAQAmAVgDBAIAAAFQgLALgEAUIgCAAQgGAzANAeIABAEQApguAfg7QAUgmAegfQAOgPARgNQgKBMgyAlQgIAGAAAQQAvgZAZgtIAAADQgDBShNAfQgsASgLA0IgEAAQAAAVACATIACABIADgBQAhgrApghIAEAAQAcgDARAIIAEgBQATgUAJAMQgBARgKADQhbAYgqBEIAAAFIAAAkIgDAAQgKAjgKAAQgJAAgIgag");
	this.shape.setTransform(18.3056,12.7964);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.4,36.6,46.5);


(lib.dahol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0BDD6D").s().p("AgJDiIgxAAIgBgEQgNgOgSgJIAAgFQgIg0gcghIABgFQALhPgnguIAAgEIAAgpQAKgxAJAaQAYBJATBIQAEARAGAJQAdg3gGhYIAAgFQgLgOgFgVIgCgBIAAgtIAAgEQARgaAHglIADAAQAMAeABAqIAAAEIgEAAQAAAXACAWIACAAQAXBGgWBJIgBAFIgEAAQAAAkACAkIACAAQAOAvAIhBIABgFQAIgegEgqIAAgEIAAgFIAAgJQAIgMABgSIAAgFIACAAQAFgcgHgRIgBgEQgRgrAFhBQA8BKgZB2IAAAFIgFAAQAAASACARIADABQADAhAFAeIABAEQASgcgFg1IAAgEIAAgFIAAgjIABgEQAShXglhHIAAgEIAAggIAAgEIAAgFQAUgmAPA7QAgCAgIChQgOAPAAAeIAAAEQAugegFhSIAAgFIAAgEIAAgfIABgEQAKgXALgWIAAgFQgKgkAPAAQAVAPgKAmQgTBKARBdIgDAAQgRBBg0AdIgFAAIhLAAIAAAFIgFAAg");
	this.shape.setTransform(15.3587,22.5768);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,45.2);


(lib.Coral1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF6D9B").s().p("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AegEgQAtIAAAEQASAbABAtIADAAQALglgCgnIAAgFQAZgLATgQQAIgHACAHQgIAjgQAbIgDABIAAAyIAAAEQgjAhgMA5IgCAAQAAAUADAQIABAFQgUAcACAwIAAAFIgEAAQAAASABARIADABIABACQAYASAQgiIAAgEIgJiQIACgBQAQgbAWgWIACAAQgBAzgOAnIACAJQAEAiAMACIAAgEQAHgdgHgiIAAgEQANgjAbgUIACAAQgKA4AIAnIgBADQgbAigIA1QABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAOgiAlgKIACAAQgFAhgKAeIgEAAQg2AxhbANIgBgDgAR8A7QgigNgXgVIAAgEQgDgjghgFIgCgDQgVgcgSggQAYADAUgDQABAAgEgEQgNgKgBgWQADgcAIgeIADAAQAVAyAZAwQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQgDAYABAZIACAAQANAVAUANIADABQAHgggLgiIAAgFIgRgTIgBgDIAAgFQADgVgIgKIgBgEQgSglgegbIgFAAQgZAAgGgSIgBgEQgEgigEg4QAeAKAJA1IABAEQAXAVARAAIABgHQgGgcgUgOIgBgDQgHg/APg6QAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAMAQgBAbQAAAQACAPIADABQADA2AiAaIADABQgXBKAlAtIAAgCQAGgtAFgpIACAAQABgegOgmIAAgEQgXgcgagbIgBgDIgBgDQgHgBAEgKIAAgEIAAgFQAegDAYAaQAHAHAAgHQgBgbAHgSQAegEgQAsIAAAFQASAaACAuIACAAQALgmgCgnIAAgEQAZgLATgRQAIgHACAIQgIAigQAcIgDABIAAAxIAAAFQgjAhgMA4IgCABQAAAUADAQIABAEQgUAcACAxIAAAEIgEAAQAAASACASIACAAIABACQAXASARghIAAgFIgJiQIADgBQAPgbAWgVIACAAQAAAzgPAnIADAJQADAhAMADIAAgFQAIgcgIgjIAAgEQANgiAbgUIACAAQgKA4AIAmIgBAEQgbAigIA0IACgBQAOgiAmgKIACAAQgFAhgKAeIgEABQg3AwhaANIgBgCgAt9A6QgigMgXgVIAAgFQgCgjgigEIgBgEQgWgcgSgfQAYADAUgDQABAAgEgEQgNgLgBgVQADgdAIgdIADgBQAVAzAZAvQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQgDAYABAaIACAAQANAUAUAOIADABQAHghgLgiIAAgEIgRgTIgBgEIAAgEQADgWgIgKIgBgEQgTglgdgaIgFAAQgZgBgGgRIgBgFQgEgigEg4QAeAKAJA1IABAFQAXAVARgBIABgHQgGgcgUgOIgBgDQgHg/APg5QAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAMAPgBAcQAAAQACAPIADAAQADA3AiAZIADABQgYBKAmAtIAAgCQAHgsAEgpIACAAQABgfgOglIAAgEQgXgdgagaIgBgEIgBgCQgHgCAEgJIAAgFIAAgEQAegEAYAaQAHAIAAgIQgBgaAHgTQAegEgQAtIAAAEQASAbACAtIACAAQALglgCgnIAAgFQAZgLATgQQAIgHACAHQgIAjgQAbIgDABIAAAyIAAAEQgjAhgMA5IgCAAQAAAUADAQIABAFQgUAcACAwIAAAFIgEAAQAAASACARIACABIABACQAXASARgiIAAgEIgJiQIACgBQAQgbAWgWIACAAQAAAzgPAnIACAJQAEAiAMACIAAgEQAHgdgHgiIAAgEQANgjAbgUIACAAQgKA4AIAnIgBADQgbAigIA1IACgBQAOgiAmgKIACAAQgFAhgKAeIgEABQg3AwhaANIgBgDg");
	this.shape.setTransform(20.6,38.8583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.5,0,506.2,77.7);


(lib.Coral = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF82A3").s().p("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");
	this.shape.setTransform(150.725,-0.7917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-56.7,469.9,111.9);


(lib.Button = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Start", "36px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 115;
	this.text.parent = this;
	this.text.setTransform(66.5,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AprC+QgyAAAAgyIAAkXQAAgyAyAAITXAAQAyAAAAAyIAAEXQAAAygyAAg");
	this.shape.setTransform(67,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,43.9);


(lib.Bubbles = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA3AAQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWg");
	this.shape.setTransform(5.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_1.setTransform(5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13,13);


// stage content:
(lib.Isdaan = function(mode,startPosition,loop,reversed) {
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
		
		this.addEventListener("tick", animations.bind(this));
		
		let start = false
		let time = 30
		let score = 0
		let catch_ = 0
		const root = this
		
		this.start.addEventListener("click", () => {
			this.start.visible = false
			this.title.visible = false
			start = true
			setInterval(startTimer, 1000)
		})
		
		setTimeout(() => {
			if(!start){
				this.start.visible = false
				this.title.visible = false
				setInterval(startTimer, 1000)
			}
		}, 1000)
		
		let bubbles = [
			this.b1, this.b2, this.b3, this.b4, this.b5,
			this.b6, this.b7, this.b8, this.b9, this.b10,
			this.b11, this.b12, this.b13, this.b14, this.b15,
			this.b16, this.b17, this.b18, this.b19, this.b20]
		
		function startTimer() {
			console.log(catch_)
			if(time > 0){
				if(catch_ < 6){
					time--
					root.timer.text = `Time: ${time}`
				}else{
					root.timer.text = `Time: ${time}`
					start = false
					root.title.visible = true
					root.title.text = "Congratiolations"
				}
			}else{
				root.title.text = "Game over"
				root.title.visible = true
			}
		}
		
		function animations(){
			if(this.isda1.x < -150){
				this.isda1.x = Math.floor(Math.random() * 500) + 600
				this.isda1.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda1.x -= 5;
		
			if(this.isda2.x < -150){
				this.isda2.x = Math.floor(Math.random() * 500) + 600
				this.isda1.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda2.x -= 5;
		
			if(this.isda3.x < -150){
				this.isda3.x = Math.floor(Math.random() * 500) + 600
				this.isda3.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda3.x -= 5;
		
		
			if(this.isda4.x > 700){
				this.isda4.x = (Math.floor(Math.random() * 500) + 150) * -1 
				this.isda4.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda4.x += 5;
		
			if(this.isda5.x > 700){
				this.isda5.x = (Math.floor(Math.random() * 500) + 150) * -1 
				this.isda5.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda5.x += 5;
		
			if(this.isda6.x > 700){
				this.isda6.x = (Math.floor(Math.random() * 500) + 150) * -1 
				this.isda6.y = Math.floor(Math.random() * 400) + 50
			}
			this.isda6.x += 5;
		
			for(let b1 in bubbles){
				if(bubbles[b1].y <= -10){
					bubbles[b1].y = Math.floor(Math.random() * 300) + 600
				}
				bubbles[b1].y -= 5
			}
		}
		
		this.sirena1.addEventListener("click", () => {
			if(time > 25){
				score += 10
			}else if(time > 15){
				score += 9
			}else if(time > 10){
				score += 8
			}else{
				score += 7
			}
			root.score.text = `Score : ${score}`
			root.sirena1.visible = false
			catch_++
		})
		
		this.sirena2.addEventListener("click", () => {
			if(time > 25){
				score += 13
			}else if(time > 15){
				score += 12
			}else if(time > 10){
				score += 11
			}else{
				score += 10
			}
			root.score.text = `Score : ${score}`
			root.sirena2.visible = false
			catch_++
		})
		
		this.sirena3.addEventListener("click", () => {
			if(time > 25){
				score += 10
			}else if(time > 15){
				score += 9
			}else if(time > 10){
				score += 8
			}else{
				score += 7
			}
			root.score.text = `Score : ${score}`
			root.sirena3.visible = false
			catch_++
		})
		
		this.sirena4.addEventListener("click", () => {
			if(time > 25){
				score += 7
			}else if(time > 15){
				score += 6
			}else if(time > 10){
				score += 5
			}else{
				score += 4
			}
			root.score.text = `Score : ${score}`
			root.sirena4.visible = false
			catch_++
		})
		
		this.sirena5.addEventListener("click", () => {
			if(time > 25){
				score += 4
			}else if(time > 15){
				score += 3
			}else if(time > 10){
				score += 2
			}else{
				score += 1
			}
			root.score.text = `Score : ${score}`
			root.sirena5.visible = false
			catch_++
		})
		
		this.sirena6.addEventListener("click", () => {
			if(time > 25){
				score += 15
			}else if(time > 15){
				score += 14
			}else if(time > 10){
				score += 13
			}else{
				score += 12
			}
			root.score.text = `Score : ${score}`
			root.sirena6.visible = false
			catch_++
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Scores_Timer
	this.score = new cjs.Text("Score: 0", "23px 'Times New Roman'");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 28;
	this.score.lineWidth = 108;
	this.score.parent = this;
	this.score.setTransform(489,2.6);

	this.timer = new cjs.Text("Time: 0", "23px 'Times New Roman'");
	this.timer.name = "timer";
	this.timer.textAlign = "center";
	this.timer.lineHeight = 28;
	this.timer.lineWidth = 94;
	this.timer.parent = this;
	this.timer.setTransform(49,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.timer},{t:this.score}]}).wait(1));

	// Title
	this.start = new lib.Button();
	this.start.name = "start";
	this.start.setTransform(275,254.7,1,1,0,0,0,67,21.9);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.title = new cjs.Text("Find all the MERMAIDS", "54px 'Times New Roman'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 62;
	this.title.lineWidth = 294;
	this.title.parent = this;
	this.title.setTransform(275,97.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.start}]}).wait(1));

	// Fishes
	this.isda6 = new lib.fishes();
	this.isda6.name = "isda6";
	this.isda6.setTransform(-159.65,241.15,1,1,0,0,180,56.2,36.9);

	this.isda5 = new lib.fishes();
	this.isda5.name = "isda5";
	this.isda5.setTransform(-204.15,71.8,1,1,0,0,180,56.2,36.9);

	this.isda4 = new lib.fishes();
	this.isda4.name = "isda4";
	this.isda4.setTransform(-67.65,150.8,1,1,0,0,180,56.2,36.9);

	this.isda3 = new lib.fishes();
	this.isda3.name = "isda3";
	this.isda3.setTransform(848.1,275.8,1,1,0,0,0,56.2,36.9);

	this.isda2 = new lib.fishes();
	this.isda2.name = "isda2";
	this.isda2.setTransform(832.15,77,1,1,0,0,0,56.2,36.9);

	this.isda1 = new lib.fishes();
	this.isda1.name = "isda1";
	this.isda1.setTransform(654.1,200.25,1,1,0,0,0,56.2,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.isda1},{t:this.isda2},{t:this.isda3},{t:this.isda4},{t:this.isda5},{t:this.isda6}]}).wait(1));

	// Bubbles
	this.b19 = new lib.Bubbles("synched",0);
	this.b19.name = "b19";
	this.b19.setTransform(506.7,119.4,1,1,0,0,0,5.5,5.5);

	this.b18 = new lib.Bubbles("synched",0);
	this.b18.name = "b18";
	this.b18.setTransform(484.7,24.45,1,1,0,0,0,5.5,5.5);

	this.b17 = new lib.Bubbles("synched",0);
	this.b17.name = "b17";
	this.b17.setTransform(409.9,163.95,1,1,0,0,0,5.5,5.5);

	this.b20 = new lib.Bubbles("synched",0);
	this.b20.name = "b20";
	this.b20.setTransform(356.3,71,1,1,0,0,0,5.5,5.5);

	this.b16 = new lib.Bubbles("synched",0);
	this.b16.name = "b16";
	this.b16.setTransform(140.85,208.4,1,1,0,0,0,5.5,5.5);

	this.b15 = new lib.Bubbles("synched",0);
	this.b15.name = "b15";
	this.b15.setTransform(210.55,88,1,1,0,0,0,5.5,5.5);

	this.b14 = new lib.Bubbles("synched",0);
	this.b14.name = "b14";
	this.b14.setTransform(48.95,108.4,1,1,0,0,0,5.5,5.5);

	this.b13 = new lib.Bubbles("synched",0);
	this.b13.name = "b13";
	this.b13.setTransform(37.95,253.85,1,1,0,0,0,5.5,5.5);

	this.b10 = new lib.Bubbles("synched",0);
	this.b10.name = "b10";
	this.b10.setTransform(99.05,50,1,1,0,0,0,5.5,5.5);

	this.b8 = new lib.Bubbles("synched",0);
	this.b8.name = "b8";
	this.b8.setTransform(484.7,242.65,1,1,0,0,0,5.5,5.5);

	this.b12 = new lib.Bubbles("synched",0);
	this.b12.name = "b12";
	this.b12.setTransform(240.5,253.65,1,1,0,0,0,5.5,5.5);

	this.b11 = new lib.Bubbles("synched",0);
	this.b11.name = "b11";
	this.b11.setTransform(210.55,478.2,1,1,0,0,0,5.5,5.5);

	this.b9 = new lib.Bubbles("synched",0);
	this.b9.name = "b9";
	this.b9.setTransform(318.5,471.2,1,1,0,0,0,5.5,5.5);

	this.b7 = new lib.Bubbles("synched",0);
	this.b7.name = "b7";
	this.b7.setTransform(392.9,402.2,1,1,0,0,0,5.5,5.5);

	this.b6 = new lib.Bubbles("synched",0);
	this.b6.name = "b6";
	this.b6.setTransform(495.7,311.7,1,1,0,0,0,5.5,5.5);

	this.b5 = new lib.Bubbles("synched",0);
	this.b5.name = "b5";
	this.b5.setTransform(447.7,467.2,1,1,0,0,0,5.5,5.5);

	this.b4 = new lib.Bubbles("synched",0);
	this.b4.name = "b4";
	this.b4.setTransform(342,329.1,1,1,0,0,0,5.5,5.5);

	this.b3 = new lib.Bubbles("synched",0);
	this.b3.name = "b3";
	this.b3.setTransform(244.7,350.2,1,1,0,0,0,5.5,5.5);

	this.b2 = new lib.Bubbles("synched",0);
	this.b2.name = "b2";
	this.b2.setTransform(73.45,444.55,1,1,0,0,0,5.5,5.5);

	this.instance = new lib.Bubbles("synched",0);
	this.instance.setTransform(126.4,471.2,1,1,0,0,0,5.5,5.5);

	this.b1 = new lib.Bubbles("synched",0);
	this.b1.name = "b1";
	this.b1.setTransform(53.85,340.1,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.instance},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b9},{t:this.b11},{t:this.b12},{t:this.b8},{t:this.b10},{t:this.b13},{t:this.b14},{t:this.b15},{t:this.b16},{t:this.b20},{t:this.b17},{t:this.b18},{t:this.b19}]}).wait(1));

	// Elements
	this.instance_1 = new lib.Coral1("synched",0);
	this.instance_1.setTransform(258.75,334.75,1,1,0,0,0,15,22.4);

	this.instance_2 = new lib.Coral("synched",0);
	this.instance_2.setTransform(124.45,357.2,1,1,0,0,0,15,22.4);

	this.instance_3 = new lib.Dahon1("synched",0);
	this.instance_3.setTransform(443.25,368.25,1,1,0,0,0,18.3,23.2);

	this.instance_4 = new lib.Dahon1("synched",0);
	this.instance_4.setTransform(86.25,330.15,1,1,0,0,0,18.3,23.2);

	this.instance_5 = new lib.Dahon1("synched",0);
	this.instance_5.setTransform(369.1,376.65,1,1,0,0,0,18.3,23.2);

	this.instance_6 = new lib.Dahon1("synched",0);
	this.instance_6.setTransform(258.7,345.2,1,1,0,0,0,18.3,23.2);

	this.instance_7 = new lib.Dahon1("synched",0);
	this.instance_7.setTransform(196.65,370.25,1,1,0,0,0,18.3,23.2);

	this.instance_8 = new lib.dahol("synched",0);
	this.instance_8.setTransform(326.1,351.5,1,1,0,0,0,15.3,22.6);

	this.instance_9 = new lib.dahol("synched",0);
	this.instance_9.setTransform(63.65,357.2,1,1,0,0,0,15.3,22.6);

	this.instance_10 = new lib.dahol("synched",0);
	this.instance_10.setTransform(136.2,320.45,1,1,0,0,0,15.3,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Mermaids
	this.sirena6 = new lib.Sirena5();
	this.sirena6.name = "sirena6";
	this.sirena6.setTransform(259.8,128,1,0.9537,0,0,0,32.8,32);

	this.sirena5 = new lib.Sirena4();
	this.sirena5.name = "sirena5";
	this.sirena5.setTransform(532.35,166.4,1,0.9537,0,0,0,14.9,17.5);

	this.sirena4 = new lib.Sirena3();
	this.sirena4.name = "sirena4";
	this.sirena4.setTransform(30.95,248.8,1,0.9537,0,0,0,19.7,36.6);

	this.sirena3 = new lib.Sirena2();
	this.sirena3.name = "sirena3";
	this.sirena3.setTransform(391.35,279.75,1,0.9537,0,0,0,16.1,17.5);

	this.sirena2 = new lib.Sirena1();
	this.sirena2.name = "sirena2";
	this.sirena2.setTransform(383.1,215.45,1,0.9537,0,0,0,21.3,34.4);

	this.sirena1 = new lib.Sirena();
	this.sirena1.name = "sirena1";
	this.sirena1.setTransform(118.3,318.5,1,0.9537,0,0,0,20.9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sirena1},{t:this.sirena2},{t:this.sirena3},{t:this.sirena4},{t:this.sirena5},{t:this.sirena6}]}).wait(1));

	// Shipwreck
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063C76").s().p("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");
	this.shape.setTransform(356,230.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32609D").s().p("EgyUAMVQy/plhrtOQEzIhNUGtQCqBXC0BJMAsyAICIAKAAMAsxgICQC0hJCqhXQU0qfAAu4QAAhJgIhGQChEpAAFLQAAMuvOJhQilBnjBBhQ00Ki9bAAQ9cAA00qig");
	this.shape_1.setTransform(397.925,165.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32365C").s().p("EgupAOgQ00qhAAu3QAAnpFfmfIAAARQAAFLChEpIANAWQBqNOS/JlQU0KidbAAQdcAAU0qiQDBhhClhnQlDFEolEWQ00Kh9cAAQ9bAA00qhg");
	this.shape_2.setTransform(322.9875,191.5625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32B4F4").s().p("EAAAAj7MgsxgIDQi0hJiqhWQtUmvkyogIgNgXQihkpAAlKIAAgRIABgMQAUukUfqXQU0qidbAAQdcAAU0KiQTPJuBdNdQAIBGAABHQAAO400KhQimBUiuBLMgsyAIDIgKAAg");
	this.shape_3.setTransform(381.1,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,3.3,889.8,481.4);
// library properties:
lib.properties = {
	id: '0185C7B546D4AA43BCD99516868B9855',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFF99",
	opacity: 1.00,
	manifest: [],
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
an.compositions['0185C7B546D4AA43BCD99516868B9855'] = {
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