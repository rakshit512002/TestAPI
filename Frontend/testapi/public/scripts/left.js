const BORDER_SIZE = 4;

const Left = document.getElementById("Left");
const Page = document.getElementById("Page");
const pagew=Page.style.width;
Left.style.setProperty('--pseudo','25%');
let m_pos;
function resize(e){
  const dx = e.x-m_pos
  m_pos = e.x;
  Left.style.width = (parseInt(getComputedStyle(Left, '').width) + dx) + "px";
  //if(Left.style.width<pagew*0.4)
  Left.style.setProperty('--pseudo',Left.style.width);
}

Left.addEventListener("mousedown", function(e){
 
  if (e.offsetX-Left.offsetWidth < BORDER_SIZE) {
    m_pos = e.x;
    Left.style.color='red';
    document.addEventListener("mousemove", resize, false);
  }
}, false);

document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resize, false);
}, false);