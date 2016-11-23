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
  panel.onmousedown = function(e){
    leftButtonDown = true;
    startY = e.clientY;
    originTop = Number(slide.style.top.slice(0, -2));
}
  panel.onmouseup = function(e){
    // this -> the panel mouse click
    leftButtonDown = false;
    panelHeight = getComputedStyle(this).height.slice(0, -2);
    position = getComputedStyle(slide).top.slice(0, -2);

    console.log('panelHeight,position,movementY: ',panelHeight,'-',position,'-',movementY);

    distance = movementY>0 ? panelHeight-movementY : -(panelHeight-(-movementY));
    position = 1*position + distance;

    console.log('distance,position: ',distance, position);

    slide.style.top = position + 'px';
    slide.style.transition = 'top 1s';
    // slide.style.top = position + 'px';
    console.log(position);
  }
  panel.onmousemove = function(e){
    if(leftButtonDown){
      endY = e.clientY;
      movementY = endY - startY;
      var newTop = originTop + movementY;
      slide.style.top = newTop + 'px';
    }
  }
  // });
};
