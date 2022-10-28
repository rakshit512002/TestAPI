 function check1()
{
if(localStorage.hasOwnProperty("name"))
{
    window.location.replace("/main");
}
else
{
    window.location.replace("/auth");
}

}


onDOMContentLoaded = check1();
//setTimeout(check1,1000);