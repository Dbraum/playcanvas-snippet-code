var UpdateAsset = pc.createScript('updateAsset');

UpdateAsset.attributes.add('a', {
    type: 'asset',
    assetType: 'model'
});

UpdateAsset.attributes.add('b', {
    type: 'asset',
    assetType: 'model'
});

UpdateAsset.attributes.add('c', {
    type: 'asset',
    assetType: 'model'
});

// initialize code called once per entity
UpdateAsset.prototype.initialize = function() {
    this.app.keyboard.preventDefault = true;
};

// update code called every frame
UpdateAsset.prototype.update = function(dt) {
    var app = this.app;
    
    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.model.model !== this.b.resource) {
            // update the model component to the new model
            this.entity.model.model = this.b.resource;
        }
    } else {
        if (this.entity.model.model !== this.a.resource) {
            // restore original model
            this.entity.model.model = this.a.resource;    
        }

        if (app.keyboard.isPressed(pc.KEY_C)) {
            if (this.c.resource) {
                if (this.entity.model.model !== this.c.resource) {
                    this.entity.model.model = this.c.resource;
                }
            }
        } else {
            if (this.entity.model.model !== this.a.resource) {
                this.entity.model.model = this.a.resource;    
            }
        }


    } 


    if (app.keyboard.isPressed(pc.KEY_L)) {
        app.assets.load(this.c);
    }
};
