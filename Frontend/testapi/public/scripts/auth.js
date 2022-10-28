
document.onload=check3;
var auth1=document.getElementById('auth1');
var auth2=document.getElementById('auth2');
var link1=document.getElementById('link1');
var link2=document.getElementById('link2');
var auth=document.getElementById('authbody');

function check1(){
    //document.getElementById('authbody').style.display='none';
    auth2.style.display='block';
    auth1.style.display='none';
    auth.style.top='150px';

};
function check2(){
    
    auth1.style.display='block';
    auth2.style.display='none';
    auth.style.top='100px';

}
link1.onclick=check1;
link2.onclick=check2;
function check3()
{//alert(localStorage.getItem('name'));
    if(localStorage.hasOwnProperty("name"))
    {
        window.location.replace("../main");
    }
}
//setInterval(check3,1000);
onDOMContentLoaded = check3();
setInterval(check3,1000);
function showpas()
{
  var temp=document.getElementById('password');
  if(temp.type=='text')
  {
    temp.type='password';
  }
  else
  {
    temp.type='text';
  }
}
function showpas1()
{
  var temp=document.getElementById('password1');
  if(temp.type=='text')
  {
    temp.type='password';
  }
  else
  {
    temp.type='text';
  }
}
document.getElementById('passvis').onclick=showpas;
document.getElementById('passvis1').onclick=showpas1;


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