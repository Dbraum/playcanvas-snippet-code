// hot to enable hot reload in playcanvas
// to implement the swap func
// demo


// swap method called for script hot-reloading
// inherit your script state here
xxx.prototype.swap = function(old) { 
    // remove the old event listener
    old.off('enable', this._onEnable);
    // add a new event listener
    this.on('enable', this._onEnable);
};

