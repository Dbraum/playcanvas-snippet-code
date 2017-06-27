// how to translate the box with keyboard

var MoveBox = pc.createScript('moveBox');

MoveBox.prototype.initialize = function() {
};

MoveBox.prototype.update = function(dt) {
    // translate in x
    if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.translateLocal(0.01,0,0);
    }
    if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        this.entity.translateLocal(-0.01,0,0);
    }
    // translate in y
    if (this.app.keyboard.isPressed(pc.KEY_UP)) {
        this.entity.translateLocal(0,0.01,0);
    }
    if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        this.entity.translateLocal(0,-0.01,0);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
 MoveBox.prototype.swap = function(old) { 
    // remove the old event listener
    old.off('enable', this._onEnable);
    // add a new event listener
    this.on('enable', this._onEnable);
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/