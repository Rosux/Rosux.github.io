$(document).on("click", function(event) {
    if (event.target.id == "Randomize") {
        var height = $("#Height").val();
        var width = $("#Width").val();
        let colors = document.getElementById("color").value;
        const myArray = colors.split(" ");
        destroyCanvas('canvas');
        createCanvas(1, height, width);
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        for (let x = 0; x < height; x++) {
            for (let y = 0; y < width; y++) {
                randColor = myArray[Math.floor(Math.random()*myArray.length)];
                drawrect(y, x, 1, 1, randColor);
            }
        }
    }
    if (event.target.id == "download") {
        downloadCanvas();
    }
});

// download canvas -- downloadCanvas();
function downloadCanvas(){
    // get canvas data
    var image = canvas.toDataURL();
    // create temporary link
    var tmpLink = document.createElement('a');
    
    tmpLink.download = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); + '.png'; // set the name of the download file
    tmpLink.href = image;
    // temporarily add link to body and initiate the download
    document.body.appendChild( tmpLink );
    tmpLink.click();
    document.body.removeChild( tmpLink );
}

// draws a full rectangle -- drawrect(10, 10, 9, 16, "red");
function drawrect(posx, posy, rectheight, rectwidth, color){
    // get canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // create rect
    ctx.fillStyle = color;
    ctx.fillRect(posx, posy, rectwidth, rectheight);
}

// destroy canvas -- destroyCanvas(canvas);
function destroyCanvas(id) {
    $(id).remove();
}

// create a canvas -- createCanvas(4, 16, 16);
function createCanvas(ammount, height, width) {
    for (let x = 0; x < ammount; x++) {
        var canvas = document.createElement("canvas");
        canvas.innerHTML = "Sorry, your browser doesn't support this image editor yet. Please try updating your browser.";
        canvas.className = "canvas";
        canvas.width = width;
        canvas.height = height;
        canvas.id = "canvas";
        document.body.appendChild(canvas);
        document.getElementById("wrapper").appendChild(canvas);
    }
}