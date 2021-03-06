var slide = document.getElementsByClassName('slide')[0],
    panels = document.getElementsByClassName('panel'),
    panel = {},
    panelHeight = "100%",
    leftButtonDown = false,
    startY = 0, endY = 0,
    originTop = 0,
    movementY = 0, distance = 0,
    position = getComputedStyle(slide).top
    ;

for(var i=0;i<panels.length;i++){
  panel = panels[i];
  // panel.onmousedown = function(e){
  panel.ontouchstart = function(e){
    leftButtonDown = true;
    startY = e.clientY;
    originTop = Number(slide.style.top.slice(0, -2));
  }
  // panel.onmouseup = function(e){
  panel.ontouchend = function(e){
    leftButtonDown = false;
  }
  // panel.onmousemove = function(e){
  panel.ontouchmove = function(e){
    var info = '';
    for(ele in e){
      info += ele + '<br>';
    }
    document.getElementById('indicator').innerHTML = info;
    if(leftButtonDown){
      endY = e.clientY;
      movementY = endY - startY;
      var newTop = originTop + movementY;
      slide.style.top = newTop + 'px';
    }
  }
  // });
};
