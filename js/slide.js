var panels = document.getElementsByClassName('panel');

for(var i=0;i<panels.length;i++){
  console.log(panels[i]);
  panels[i].onmousedown = function(e){
    console.log(e);
  }
};
