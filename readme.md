# why

The project is used for collecting playcanvas sinppet code.


## sinppet

```
// This stops the default action of the event occuring. e.g. Ctrl+T will not open a new browser tab


var app = new pc.Application(canvas, {
            keyboard: new pc.Keyboard(window)
        });
this.app.keyboard.preventDefault = true;
```
