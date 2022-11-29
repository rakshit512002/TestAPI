const token1=document.getElementById('token1')

 token1.value='Bearer '+getCookie('token')
function showdata(){
  document.getElementById('createreq').style.display='inline';
  document.getElementById('btnlist').style.display='none';
}
 ///
 
 var typetext="";
 var linktext="";
 var tokentext="";
 var Bodytext="";
 function changedata()
 {
  const coll=document.getElementsByClassName("Bord");
 for (let i = 0; i < coll.length; i++) {
  coll[i].onclick=()=>{
    document.getElementById('createreq').style.display='none';
    document.getElementById('btnlist').style.display='block';
    document.getElementById('GET').checked=false;
document.getElementById('POST').checked=false;
document.getElementById('PUT').checked=false;
document.getElementById('DELETE').checked=false;
const type=coll[i].getElementsByClassName("top")[0].getElementsByClassName("type")[0].innerHTML;
document.getElementById(type).checked=true;
document.getElementById('link').value=coll[i].getElementsByClassName("top")[0].getElementsByClassName("url")[0].innerHTML;
document.getElementById('Body').value=coll[i].getElementsByClassName("content")[0].innerHTML;
document.getElementById('usertoken').value=coll[i].getElementsByClassName("content")[0].id;
document.getElementById('_id').value=coll[i].id;
typetext=type;
linktext=document.getElementById('link').value;
tokentext=document.getElementById('usertoken').value;
Bodytext=document.getElementById('Body').value;

  };
}
 }
function checkdata()
{ const a=document.getElementById('GET').checked;
const b=document.getElementById('POST').checked;
const c=document.getElementById('PUT').checked;
const d=document.getElementById('DELETE').checked;
var typex;
if(a)
typex="GET";
else if(b)
typex="POST";
else if(c)
typex="PUT";
else if(d)
typex="DELETE";
if(tokentext!=document.getElementById('usertoken').value||Bodytext!=document.getElementById('Body').value||linktext!=document.getElementById('link').value||typex!=typetext)
{

}
else
{
  
}
}
setInterval(changedata,1000);
setInterval(checkdata,1000);
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