var slide = document.getElementsByClassName('slide')[0],
    panels = document.getElementsByClassName('panel'),
    panel = {},
    leftButtonDown = false,
    startY = 0, endY = 0,
    originTop = 0,
    movementY = 0
    ;

for(var i=0;i<panels.length;i++){
  panel = panels[i];
  panel.onmousedown = function(e){
    leftButtonDown = true;
    startY = e.clientY;
    originTop = Number(slide.style.top.slice(0, -2));
}
  panel.onmouseup = function(e){
    leftButtonDown = false;
  }
  panel.onmousemove = function(e){
    if(leftButtonDown){
      endY = e.clientY;
      movementY = endY - startY;
      var newTop = originTop + movementY;
      slide.style.top = newTop + 'px';
    }
  }
};
