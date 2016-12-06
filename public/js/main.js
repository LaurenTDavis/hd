
angular.module('HD_App', ['ngRoute']);




angular.module('HD_App')
    .controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    
    $scope.company = "Hamlin Davis"; 

    $scope.right = true; 
    $scope.left = true; 
    $scope.righthome = false;
    $scope.lefthome = false;

    $scope.viewRight = function() {
    	$scope.righthome = true;
    	$scope.right = false;
    	$scope.left = false;
    }

    $scope.viewHome = function() {
    	$scope.right = true;
    	$scope.left = true;
    	$scope.righthome = false;
    	$scope.lefthome = false;
    }

    $scope.viewLeft = function() {
    	$scope.lefthome = true;
    	$scope.right = false; 
    	$scope.left = false
    }

    $scope.text1 = true;
    $scope.draw1 = false;
    $scope.showDraw = false;
    $scope.hidden = false;

    $scope.textSelect1 = function() {
        $scope.text1 = true;
        $scope.draw1 = false;
        if($scope.draw1 == false && $scope.draw2 == false && $scope.draw3 == false) {
            $scope.showDraw = false;
        }
        if($scope.text1 == true && $scope.text2 == true && $scope.text3 == true) {
            $scope.hidden = false;
        }
    }

    $scope.drawSelect1 = function() {
        $scope.text1 = false;
        $scope.draw1 = true;
        if($scope.draw1 == true || $scope.draw2 == true || $scope.draw3 == true) {
            $scope.showDraw = true;
        }
        if($scope.text1 == false || $scope.text2 == false || $scope.text3 == false) {
            $scope.hidden = true;
        }
    }

    $scope.text2 = true;
    $scope.draw2 = false;

    $scope.textSelect2 = function() {
        $scope.text2 = true;
        $scope.draw2 = false;  
        if($scope.draw1 == false && $scope.draw2 == false && $scope.draw3 == false) {
            $scope.showDraw = false;
        }
        if($scope.text1 == true && $scope.text2 == true && $scope.text3 == true) {
            $scope.hidden = false;
        }  
    }

    $scope.drawSelect2 = function() {
        $scope.text2 = false;
        $scope.draw2 = true;
        if($scope.draw1 == true || $scope.draw2 == true || $scope.draw3 == true) {
            $scope.showDraw = true;
        }
        if($scope.text1 == false || $scope.text2 == false || $scope.text3 == false) {
            $scope.hidden = true;
        }
    
    }

    $scope.text3 = true;
    $scope.draw3 = false;

    $scope.textSelect3 = function() {
        $scope.text3 = true;
        $scope.draw3 = false;
        if($scope.draw1 == false && $scope.draw2 == false && $scope.draw3 == false) {
            $scope.showDraw = false;
        }
        if($scope.text1 == true && $scope.text2 == true && $scope.text3 == true) {
            $scope.hidden = false;
        }
    }

    $scope.drawSelect3 = function() {
        $scope.text3 = false;
        $scope.draw3 = true;
        if($scope.draw1 == true || $scope.draw2 == true || $scope.draw3 == true) {
            $scope.showDraw = true;
        }
        if($scope.text1 == false || $scope.text2 == false || $scope.text3 == false) {
            $scope.hidden = true;
        }
    }

    $scope.invisible = true;

    $scope.messageSuccess = false;
    $scope.notreal = false;




    $scope.subForm = {
        message1      : '',
        message2      : '',
        message3      : '',

    }

    $scope.formSubmit = function() {

        $scope.messageSuccess = true;
        $scope.notreal = true;
    }

    $(document).ready(function() {
    $('#submission_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            question1: {
                validators: {
                    // notEmpty: {
                    //     message: 'Please supply your email address'
                    // },
                    // stringLength: {
                    //     message: 'Please supply a valid email address'
                    // }
                }
            },

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_submit').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#submission_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');

            var forms = document.getElementById("submission_form");
            forms.reset();
        });
    });


    $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');

            var forms = document.getElementById("contact_form");
            forms.reset();
        });
    });


    
}])


var canvas;
var context;
var canvasWidth = 490;
var canvasHeight = 220;
var padding = 25;
var lineWidth = 8;
var colorRed = "#E72A2A"
var colorOrange = "#ff7b00"
var colorYellow = "#ffcf33";
var colorGreen = "#659b41";
var colorBlue = "#1949EC"
var colorPurple = "#733dba";
var colorBrown = "#784212";
var colorBlack = "#000000"
var outlineImage = new Image();
var crayonImage = new Image();
var markerImage = new Image();
var eraserImage = new Image();
var crayonBackgroundImage = new Image();
var markerBackgroundImage = new Image();
var eraserBackgroundImage = new Image();
var crayonTextureImage = new Image();
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();
var paint = false;
var curColor = colorBlack;
var curTool = "crayon";
var curSize = "normal";
var mediumStartX = 18;
var mediumStartY = 19;
var mediumImageWidth = 93;
var mediumImageHeight = 46;
var drawingAreaX = 111;
var drawingAreaY = 11;
var drawingAreaWidth = 267;
var drawingAreaHeight = 200;
var toolHotspotStartY = 23;
var toolHotspotHeight = 38;
var sizeHotspotStartY = 157;
var sizeHotspotHeight = 36;
var sizeHotspotWidthObject = new Object();
sizeHotspotWidthObject.huge = 39;
sizeHotspotWidthObject.large = 25;
sizeHotspotWidthObject.normal = 18;
sizeHotspotWidthObject.small = 16;
var totalLoadResources = 8;
var curLoadResNum = 0;


// Second Sticky Note 

var clickX_middle = new Array();
var clickY_middle = new Array();
var clickDrag_middle = new Array();
var clickColor_middle = new Array();
var clickSize_middle = new Array();
var clickTool_middle = new Array();
var paint_middle;
var canvas_middle;
var context_middle;
var curColor_middle = colorBlack;
var curTool_middle = "crayon";
var curSize_middle = "normal";



// Third Sticky Note 

var clickX_last = new Array();
var clickY_last = new Array();
var clickDrag_last = new Array();
var clickColor_last = new Array();
var clickSize_last = new Array();
var clickTool_last = new Array();
var paint_last;
var canvas_last;
var context_last;
var curColor_last = colorBlack;
var curTool_last = "crayon";
var curSize_last = "normal";



/**
* Calls the redraw function after all neccessary resources are loaded.
*/
function resourceLoaded()
{
    if(++curLoadResNum >= totalLoadResources){
        redraw();
    }
}


// First Sticky Note 

function prepareCanvas()
{
    context = document.getElementById('canvas').getContext("2d");
    
    $('#canvas').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;
            
      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });

    $('#canvas').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });

    $('#canvas').mouseup(function(e){
      paint = false;
    });

    $('#canvas').mouseleave(function(e){
      paint = false;
    });
    $('#chooseRedSimpleTools').mousedown(function(e){
        curColor = colorRed;
        curColor_middle = colorRed;
        curColor_last = colorRed;
    });
    $('#chooseOrangeSimpleTools').mousedown(function(e){
        curColor = colorOrange;
        curColor_middle = colorOrange;
        curColor_last = colorOrange;
    });
    $('#chooseBlueSimpleTools').mousedown(function(e){
        curColor = colorBlue;
        curColor_middle = colorBlue;
        curColor_last = colorBlue;
    });
    $('#choosePurpleSimpleTools').mousedown(function(e){
        curColor = colorPurple;
        curColor_middle = colorPurple;
        curColor_last = colorPurple;
    });
    $('#chooseGreenSimpleTools').mousedown(function(e){
        curColor = colorGreen;
        curColor_middle = colorGreen;
        curColor_last = colorGreen;
    });
    $('#chooseYellowSimpleTools').mousedown(function(e){
        curColor = colorYellow;
        curColor_middle = colorYellow;
        curColor_last = colorYellow;
    });
    $('#chooseBrownSimpleTools').mousedown(function(e){
        curColor = colorBrown;
        curColor_middle = colorBrown;
        curColor_last = colorBrown;
    }); 
    $('#chooseBlackSimpleTools').mousedown(function(e){
        curColor = colorBlack;
        curColor_middle = colorBlack;
        curColor_last = colorBlack;
    });
    $('#chooseSmallSimpleTools').mousedown(function(e){
        curSize = "small";
    });
    $('#chooseNormalSimpleTools').mousedown(function(e){
        curSize = "normal";
    });
    $('#chooseLargeSimpleTools').mousedown(function(e){
        curSize = "large";
    });
    $('#chooseHugeSimpleTools').mousedown(function(e){
        curSize = "huge";
    });
    $('#chooseCrayonSimpleTools').mousedown(function(e){
        curTool = "crayon";
        curTool_middle = "crayon";
        curTool_last = "crayon";
    });
    $('#chooseMarkerSimpleTools').mousedown(function(e){
        curTool = "marker";
        curTool_middle = "marker";
        curTool_last = "marker";
    });
    $('#chooseEraserSimpleTools').mousedown(function(e){
        curTool = "eraser";
        curTool_middle = "eraser";
        curTool_last = "eraser";
    });
    
    $('#clearCanvasSimpleTools').mousedown(function(e)
    {
        clickX = new Array();
        clickY = new Array();
        clickDrag = new Array();
        clickColor = new Array();
        clickSize = new Array();
        clearCanvas();
    });
}

function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickTool.push(curTool);
    if(curTool == "eraser"){
        clickColor.push("#ffc");
    }else{
        clickColor.push(curColor);
    }
    clickSize.push(curSize);
}

function clearCanvas()
{
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}


function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.lineJoin = "round";
  context.lineWidth = 5;
            
  for(var i=0; i < clickX.length; i++) {        
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.stroke();
  }
}



// Second Sticky note functions

function prepareMiddle()
{

    context_middle = document.getElementById('canvasmiddle').getContext("2d");
    
    // Add mouse events
    // ----------------
    $('#canvasmiddle').mousedown(function(e)
    {
        // Mouse down location
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        
        paint_middle = true;
        addClickmiddle(mouseX, mouseY, false);
        redrawmiddle();
    });
    
    $('#canvasmiddle').mousemove(function(e){
        if(paint_middle){
            addClickmiddle(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redrawmiddle();
        }
    });
    
    $('#canvasmiddle').mouseup(function(e){
        paint_middle = false;
        redrawmiddle();
    });
    
    $('#canvasmiddle').mouseleave(function(e){
        paint_middle = false;
    });
    

    $('#chooseSmallMiddle').mousedown(function(e){
        curSize_middle = "small";
    });
    $('#chooseNormalMiddle').mousedown(function(e){
        curSize_middle = "normal";
    });
    $('#chooseLargeMiddle').mousedown(function(e){
        curSize_middle = "large";
    });
    $('#chooseHugeMiddle').mousedown(function(e){
        curSize_middle = "huge";
    });
    $('#chooseCrayonMiddle').mousedown(function(e){
        curTool_middle = "crayon";
    });
    $('#chooseEraserMiddle').mousedown(function(e){
        curTool_middle = "eraser";
    });
    
    $('#clearCanvasMiddle').mousedown(function(e)
    {
        clickX_middle = new Array();
        clickY_middle = new Array();
        clickDrag_middle = new Array();
        clickColor_middle = new Array();
        clickSize_middle = new Array();
        clearCanvas_middle();
    });
}

function addClickmiddle(x, y, dragging)
{
    clickX_middle.push(x);
    clickY_middle.push(y);
    clickDrag_middle.push(dragging);
    clickTool_middle.push(curTool_middle);
    if(curTool_middle == "eraser") {
        clickColor_middle.push("#ffc");
    }else {
        clickColor_middle.push(curColor_middle);
    }
    clickSize_middle.push(curSize_middle);
}


function clearCanvas_middle()
{
    context_middle.clearRect(0, 0, context_middle.canvas.width, context_middle.canvas.height);
}

function redrawmiddle()
{
    clearCanvas_middle();
    
    var radius;
    context_middle.lineJoin = "round";
    
            
    for(var i=0; i < clickX_middle.length; i++)
    {
        if(clickSize_middle[i] == "small"){
            radius = 2;
        }else if(clickSize_middle[i] == "normal"){
            radius = 5;
        }else if(clickSize_middle[i] == "large"){
            radius = 10;
        }else if(clickSize_middle[i] == "huge"){
            radius = 20;
        }
    
        context_middle.beginPath();
        if(clickDrag_middle[i] && i){
            context_middle.moveTo(clickX_middle[i-1], clickY_middle[i-1]);
        }else{
            context_middle.moveTo(clickX_middle[i]-1, clickY_middle[i]);
        }
        context_middle.lineTo(clickX_middle[i], clickY_middle[i]);
        context_middle.closePath();
        context_middle.strokeStyle = clickColor_middle[i];
        context_middle.lineWidth = radius;
        context_middle.stroke();
    }
}
  

// Third Sticky Note Functions


function prepareLast()
{

    context_last = document.getElementById('canvasLast').getContext("2d");
    
    // Add mouse events
    // ----------------
    $('#canvasLast').mousedown(function(e)
    {
        // Mouse down location
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        
        paint_last = true;
        addClickLast(mouseX, mouseY, false);
        redrawLast();
    });
    
    $('#canvasLast').mousemove(function(e){
        if(paint_last){
            addClickLast(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redrawLast();
        }
    });
    
    $('#canvasLast').mouseup(function(e){
        paint_last = false;
        redrawLast();
    });
    
    $('#canvasLast').mouseleave(function(e){
        paint_last = false;
    });
    
    
    $('#clearCanvasLast').mousedown(function(e)
    {
        clickX_last = new Array();
        clickY_last = new Array();
        clickDrag_last = new Array();
        clickColor_last = new Array();
        clickSize_last = new Array();
        clearCanvas_last();
    });
}

function addClickLast(x, y, dragging)
{
    clickX_last.push(x);
    clickY_last.push(y);
    clickDrag_last.push(dragging);
    clickTool_last.push(curTool_last);
    if(curTool_last == "eraser") {
        clickColor_last.push("#ffc");
    } else {
        clickColor_last.push(curColor_last);
    }
    clickSize_last.push(curSize_last);
}

function clearCanvas_last()
{
    context_last.clearRect(0, 0, context_last.canvas.width, context_last.canvas.height);
}

function redrawLast()
{
    clearCanvas_last();
    
    var radius;
    context_last.lineJoin = "round";
    
            
    for(var i=0; i < clickX_last.length; i++)
    {
        if(clickSize_last[i] == "small"){
            radius = 2;
        }else if(clickSize_last[i] == "normal"){
            radius = 5;
        }else if(clickSize_last[i] == "large"){
            radius = 10;
        }else if(clickSize_last[i] == "huge"){
            radius = 20;
        }
    
        context_last.beginPath();
        if(clickDrag_last[i] && i){
            context_last.moveTo(clickX_last[i-1], clickY_last[i-1]);
        }else{
            context_last.moveTo(clickX_last[i]-1, clickY_last[i]);
        }
        context_last.lineTo(clickX_last[i], clickY_last[i]);
        context_last.closePath();
        context_last.strokeStyle = clickColor_last[i];
        context_last.lineWidth = radius;
        context_last.stroke();
    }
}





// Taking Canvas and exporting it to image to then be added to form for mailing 

function exportImage() {
    console.log("clicked");
    canvas = document.getElementsByTagName("canvas");
    // document.write('<img src="'+canvas[0].toDataURL("image/png")+'"/>');
    var canvasURL = canvas[0].toDataURL("image/png");
    console.log("image copied")
    var img = document.getElementById("image1").src = canvasURL;
    console.log(img);
}

    // Set up the UI
    var sigText = document.getElementById("sig-dataUrl");
    var sigImage = document.getElementById("sig-image");
    var submitBtn = document.getElementById("sig-submitBtn");

    // submitBtn.addEventListener("click", function (e) {
    //     canvas = document.getElementById("canvas");
    //     var dataUrl = canvas.toDataURL();
    //     sigText.innerHTML = dataUrl;
    //     sigImage.setAttribute("src", dataUrl);
    // }, false);


    var subText = document.getElementById("sig-dataUrl2");
    var subImage = document.getElementById("sig-image2");
    var submitBtn2 = document.getElementById("sig-submitBtn2");

    // submitBtn2.addEventListener("click", function (e) {
    //     canvas_middle = document.getElementById("canvasmiddle");
    //     var dataUrl1 = canvas_middle.toDataURL();
    //     subText.innerHTML = dataUrl1;
    //     subImage.setAttribute("src", dataUrl1);
    // }, false);


    var subText1 = document.getElementById("sig-dataUrl3");
    var subImage1 = document.getElementById("sig-image3");
    var submitBtn3 = document.getElementById("sig-submitBtn3");

    // submitBtn3.addEventListener("click", function (e) {
    //     canvas_last = document.getElementById("canvasLast");
    //     var dataUrl2 = canvas_last.toDataURL();
    //     subText1.innerHTML = dataUrl2;
    //     subImage1.setAttribute("src", dataUrl2);
    // }, false);


    var finalBtn = document.getElementById("finalSubmit");


    finalBtn.addEventListener("click", function (e) {
        canvas = document.getElementById("canvas");
        var dataUrl = canvas.toDataURL();
        sigText.innerHTML = dataUrl;
        sigImage.setAttribute("src", dataUrl);

        canvas_middle = document.getElementById("canvasmiddle");
        var dataUrl1 = canvas_middle.toDataURL();
        subText.innerHTML = dataUrl1;
        subImage.setAttribute("src", dataUrl1);

        canvas_last = document.getElementById("canvasLast");
        var dataUrl2 = canvas_last.toDataURL();
        subText1.innerHTML = dataUrl2;
        subImage1.setAttribute("src", dataUrl2);
    }, false);







