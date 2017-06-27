// how to rotate the box
// use rotateLocal(x,y,z)


var Rotate = pc.createScript('rotate');

// initialize code called once per entity
Rotate.prototype.initialize = function() {
    console.info('hello world');
};

// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.app.keyboard.isPressed(pc.KEY_A)) {
        this.entity.rotateLocal(0,-2,0);
    }
    
    if (this.app.keyboard.isPressed(pc.KEY_D)) {
        this.entity.rotateLocal(0,2,0);
    }
};