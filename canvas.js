let canvas = document.getElementById('canvas') //canvas element

if(canvas.getContext){
    // if true
    const ctx = canvas.getContext('2d'); // we can use this var, to draw whatever we want!

    // Draw a rectangle

    ctx.rect(10,20,150,100); // canvas will draw a rectangle from your x, y, w, and h properties.

    ctx.rect(10,20,150,100);

    ctx.fillStyle = 'green'; // I want whatever I want to be green.
    ctx.fillRect(10,20,150,100); // I want a green rectangle

    ctx.beginPath();
    ctx.rect(20,20,150,100);
    ctx.stroke();

    ctx.font = "30px Arial"; // font-size and font-family
    ctx.fillText("Hey 201 peeps",20,80); // what we want to write: x and y
}