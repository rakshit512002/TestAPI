
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

