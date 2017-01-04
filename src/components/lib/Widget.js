//阻止事件冒泡
function stopBubble(evt) {
  if(evt && evt.stopPropagation){      //非IE
    evt.stopPropagation();
  }else {       //IE
    window.evt.cancelBubble = true;
  }
}
//阻止事件默认行为
function stopDefault(evt){
  if(evt && evt.preventDefault){
    evt.preventDefault();
  }else {
    window.evt.returnValue = false;
  }
}
//去除空格
function trim(string){
  return string.replace(/\s+/g,'')
}


export {
  stopBubble,
  stopDefault,
  trim,

}
