
document.getElementById('logout').onclick=()=>
{
    localStorage.clear();
    window.location.replace("../auth");
}
function check1()
{//alert(localStorage.getItem('name'));
    if(!localStorage.hasOwnProperty("name"))
    {
        window.location.replace("../auth");
    }
}
//setInterval(check1,1000);
onDOMContentLoaded = check1();