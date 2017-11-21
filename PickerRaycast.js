// 鼠标点击物体触发对应函数实现如下
// 首先需要将鼠标点击的坐标转换为playcanvas scene中的坐标，使用的是this,entity.camera.screenToWorld
// 得到 from 和 to


var PickerRaycast = pc.createScript('pickerRaycast');

// initialize code called once per entity
PickerRaycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
};

PickerRaycast.prototype.onSelect = function (e) {
    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

    this.app.systems.rigidbody.raycastFirst(from, to, function (result) {
        var pickedEntity = result.entity;

        pickedEntity.script.pulse.pulse();
    });
};
