document.addEventListener("DOMContentLoaded", function(){
  let canvas = new fabric.Canvas(document.getElementById('c'), {
  isDrawingMode: true
});

let brush = new fabric.PencilBrush(canvas);
let points = [[10,10], [20,20], [25,70],[100,300]];

brush.onmousedown({x:points[0][0], y:points[0][1]});
for(let i=1;i<points.length;i++) {
  brush.onmousemove({x:points[i][0], y:points[i][1]});
}
})