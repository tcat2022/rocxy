function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'purple';
    ctx.
lineWidth = 5;
    // draw a red line
    ctx.beginPath();
    ctx.moveTo(400, 500);
    ctx.lineTo(400, 100);
    ctx.stroke();
    ctx.strokeStyle = 'pink';
    ctx.
lineWidth = 3;
    // draw a red line
    ctx.beginPath();
    ctx.moveTo(400, 500);
    ctx.lineTo(400, 100);
    ctx.stroke();
    ctx.strokeStyle = 'purple';
    ctx.
lineWidth = 5;
ctx.beginPath();
ctx.moveTo(200, 500);
ctx.lineTo(400, 100);
ctx.stroke(); 
ctx.strokeStyle = 'pink';
ctx.
lineWidth = 3;
ctx.beginPath();
ctx.moveTo(200, 500);
ctx.lineTo(400, 100);
ctx.stroke();
ctx.strokeStyle = 'purple';
    ctx.
lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 700);
ctx.stroke();
ctx.strokeStyle = 'pink';
ctx.
lineWidth = 3;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 700);
ctx.stroke();
ctx.strokeStyle = 'purple';
    ctx.
lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 1000);
ctx.stroke();
ctx.strokeStyle = 'pink';
ctx.
lineWidth = 3;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 1000);
ctx.stroke();
}
draw();