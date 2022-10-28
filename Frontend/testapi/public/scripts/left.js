// scripts for resizable div

const BORDER_SIZE = 4;
const Token=document.getElementById('token')

 Token.value='Bearer '+getCookie('token')
const Left = document.getElementById("Left");
const Page = document.getElementById("Page");
//Left.innerHTML=getCookie('token');
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


// scripts for plus btn
var plus=document.getElementById('plus');
function loadleft()
{
  document.getElementById('loadreq').click()
}
onDOMContentLoaded = loadleft();
setInterval(loadleft,1000);



///
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}