 // Set up touch events for mobile, etc

    var touch1 = document.getElementById("canvas");

    touch1.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvas");


        mousePos = getTouchPos(canvas, e);
        console.log(mousePos)
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch1.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvas");

        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch1.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvas");

        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);


    var touch2 = document.getElementById("canvasmiddle");

    touch2.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvasmiddle");

        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch2.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvasmiddle");

        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch2.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvasmiddle");
        
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);

    var touch3 = document.getElementById("canvasLast");

    touch3.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvasLast");

        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch3.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvasLast");

        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);
    touch3.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvasLast");
        
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);

    // Prevent scrolling when touching the canvas
    touch1.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvas");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch1.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvas");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch1.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvas");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    touch2.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvasmiddle");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch2.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvasmiddle");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch2.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvasmiddle");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    touch3.addEventListener("touchstart", function (e) {
        var canvas = document.getElementById("canvasLast");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch3.addEventListener("touchend", function (e) {
        var canvas = document.getElementById("canvasLast");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    touch3.addEventListener("touchmove", function (e) {
        var canvas = document.getElementById("canvasLast");

        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
        console.log(rect)
    }
