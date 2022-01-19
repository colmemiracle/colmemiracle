document.addEventListener("DOMContentLoaded", function(){

  let canvas = new fabric.Canvas('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


 
//   let prevX, prevY;
//   canvas.onmousemove = function(e) {
//   var x = e.pageX - canvas.offsetX;
//   var y = e.pageY - canvas.offsetY;

//   let cursor = document.getElementById("cursor")
//   cursor.style.left = x
//   cursor.style.top = y

//   console.log(x, y)

//  }

//////// download 
let save = document.getElementById("download")

  save.onclick = function(){
    var dataURL = canvas.toDataURL("image/png");
    // var newTab = window.open(canvas.toDataURL('image/png'));
    newTab.document.write("<img src='" + dataURL + "' alt='from canvas' />");
  }
 
/////////////////////
  let bgDesign = document.getElementById("bgDesign"),
  shapesDesign = document.getElementById("shapesDesign"),
  imgDesign = document.getElementById("imgDesign"),
  textDesign = document.getElementById("textDesign"),
  drawDesign = document.getElementById("drawDesign")

  bgDesign.style.display = "block"
  shapesDesign.style.display = "none"
  imgDesign.style.display = "none"
  textDesign.style.display = "none"
  drawDesign.style.display = "none"

  document.getElementById("bgDesign_button").onclick = function(){
    bgDesign.style.display = "block"
    shapesDesign.style.display = "none"
    imgDesign.style.display = "none"
    textDesign.style.display = "none"
    drawDesign.style.display = "none"
  }
  document.getElementById("shapesDesign_button").onclick = function(){
    bgDesign.style.display = "none"
    shapesDesign.style.display = "block"
    imgDesign.style.display = "none"
    textDesign.style.display = "none"
    drawDesign.style.display = "none"
  }
  document.getElementById("imgDesign_button").onclick = function(){
    bgDesign.style.display = "none"
    shapesDesign.style.display = "none"
    imgDesign.style.display = "block"
    textDesign.style.display = "none"
    drawDesign.style.display = "none"
  }
  document.getElementById("textDesign_button").onclick = function(){
    bgDesign.style.display = "none"
    shapesDesign.style.display = "none"
    imgDesign.style.display = "none"
    textDesign.style.display = "block"
    drawDesign.style.display = "none"
  }
  document.getElementById("drawDesign_button").onclick = function(){
    bgDesign.style.display = "none"
    shapesDesign.style.display = "none"
    imgDesign.style.display = "none"
    textDesign.style.display = "none"
    drawDesign.style.display = "block"
  }

/////////////////// BACKGROUND
  let colorPicker = document.getElementById("bgColor");
  function changebodycolor(){
      let colorVal = colorPicker.value;
      canvas.setBackgroundColor(colorVal, ()=> {canvas.renderAll()})
  }
  colorPicker.addEventListener("input",
  changebodycolor,false)

  let colorDiv = document.getElementById("color_val");
  colorDiv.innerHTML = colorPicker.value;

  colorPicker.oninput = function() {
    colorDiv.innerHTML = colorPicker.value;
    colorDiv.style.color = colorPicker.value;
  }
//////////////////// TEXT
  let text_style = document.getElementById("italicCBox")
  let text_weight = document.getElementById("boldCBox")
  let underlining = document.getElementById("underlineCBox")
  let text_color = document.getElementById("text_color")
  let text_family = document.getElementById("fonts");
  let text_size = document.getElementById("text_size");
  
  document.getElementById("onloadText").onclick = function(){
      let user_text = document.getElementById("text")
      
      let userText = new fabric.Text(user_text.value, {
          fontWeight: text_weight.checked === true ? "bold" : "normal",
          fontStyle: text_style.checked === true ? "italic" : "normal",
          underline: underlining.checked === false ? "underline" : "normal",
          fontFamily: text_family.value,
          fontSize: text_size.value,
          fill: text_color.value
        })
      canvas.add(userText)
  }

  
  text_color.oninput = function(){
    let object = canvas.getActiveObject();
      object.set({
        fill: text_color.value
      })
      canvas.renderAll()
  }

  text_family.oninput = function(){
    let object = canvas.getActiveObject();
      object.set({
        fontFamily: text_family.value
      })
      canvas.renderAll()
  }

  text_size.oninput = function(){
    let object = canvas.getActiveObject();
      object.set({
        fontSize: text_size.value
      })
      canvas.renderAll()
  }
///////////////////// IMG
  document.getElementById("url").oninput = function(){
      url = this.value
  }
  let img = new Image();
  img.src = url;
  document.getElementById("onloadImg").onclick = function(){
      fabric.Image.fromURL(url, function(oImg) {
          canvas.add(oImg);
      });
  }
    
////////////////// SHAPES
  document.getElementById("shapeColor").oninput = function(){
      shapeColor = this.value
  }    
  document.getElementById("stroke_width").onchange = function(){
    stroke_width = this.value
  }    
  document.getElementById("stroke_color").oninput = function(){
    stroke_color = this.value
  }    
  shapeColor.oninput = function(){
    let object = canvas.getActiveObject();
      object.set({
        fill: shapeColor.value
      })
      canvas.renderAll()
  }
  document.getElementById("circle").onclick = function(){
      let circle = new fabric.Circle({
          radius: 40, 
          fill: shapeColor, 
          // stroke: stroke_color, 
          // strokeWidth: stroke_width, 
          left: 0, top: 0})
      canvas.add(circle)
  }
  document.getElementById("rect").onclick = function(){
      let rect = new fabric.Rect({
          left: 0, top: 0, 
          fill: shapeColor, 
          // stroke: stroke_color, 
          // strokeWidth: stroke_width, 
          width: 40, height: 40})
      canvas.add(rect)
  }
  document.getElementById("triangle").onclick = function(){
      let triangle = new fabric.Triangle({
          width: 40, 
          height: 40, 
          fill: shapeColor, 
          // stroke: stroke_color, 
          // strokeWidth: stroke_width,
          left: 0, top: 0})
      canvas.add(triangle)
  }
   
  let minus = document.getElementById("minus")
  let plus = document.getElementById("plus")
  let strokeParameters = document.getElementById("strokeParameters")

  minus.style.display= "none"
  strokeParameters.style.display= "none"

  plus.onclick = function(){
    minus.style.display= "block"
    plus.style.display= "none"
    strokeParameters.style.display= "block"
  }

  minus.onclick = function(){
    plus.style.display= "block"
    minus.style.display= "none"
    strokeParameters.style.display= "none"
  }

/////////////////// opacity n remove
  
  document.getElementById("remove").onclick = function(){
    let object = canvas.getActiveObject();
    canvas.remove(object)
  }

  document.getElementById("opacity_range").oninput = function(){
    let object = canvas.getActiveObject();
    object.set({
      opacity: this.value *0.01,
      fill: text_color.value
    })
    canvas.renderAll()
  }

  ////////////// eraser clean
  let eraser= document.getElementById("eraser")
  let stop= document.getElementById("stop")
  document.getElementById("clear").onclick = function(){ canvas.clear() };
  stop.style.display = "none"
  
  let eraserWidth = document.getElementById("eraserWidth")
  eraserWidth.style.display = "none"

  let range = document.getElementById("range")
  range.onmousemove = function(){
    document.getElementById('rangeValue').innerHTML = this.value
    console.log(range.value)
  }

  eraser.onclick = function(){
    eraser.style.display = "none"
    stop.style.display = "block"
    eraserWidth.style.display = "block"

    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    canvas.freeDrawingBrush.width = range.value + "px";
    canvas.isDrawingMode = true;
  }
  stop.onclick = function(){
    eraser.style.display = "block"
    stop.style.display = "none"
    eraserWidth.style.display = "none"
    canvas.isDrawingMode = false;
  }


/////////////////// draw
  let draw = document.getElementById("draw")
  let nodraw = document.getElementById("nodraw")
  nodraw.style.display = "none"

  canvas.isDrawingMode = false

  draw.onclick = function(){
    nodraw.style.display = "block"
    draw.style.display = "none"
    canvas.isDrawingMode = true
    let pencil = new fabric.PencilBrush(canvas);

    let points = [[10,10], [20,20], [25,70],[100,300]];
  
    pencil.onmousedown({x:points[0][0], y:points[0][1]});
    for(let i=1;i<points.length;i++) {
      pencil.onmousemove({x:points[i][0], y:points[i][1]});
    }
  }
  nodraw.onclick = function(){
    canvas.isDrawingMode = false
    nodraw.style.display = "none"
    draw.style.display = "block"
  }

  
});
