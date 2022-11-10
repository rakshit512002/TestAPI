import Req from "./req";
function Left()
 {  
  const leftdata = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault();
  const endpoint="/proxy/api/requests";
  // Get data from the form.
///  alert(event.target.token.value)
  const data = {
    Authorization:event.target.token.value
  }
  const JSONdata = JSON.stringify(data)
//  alert(JSONdata);
  const options = {
    // The method is POST because we are sending data.
    method: 'GET',
    // Tell the server we're sending JSON.
    headers: {
      Authorization:`${event.target.token.value}`
    }
    // Body of the request is the JSON data we created above.
  
  }
  const response = await fetch(endpoint, options)
 //alert(JSON.stringify(options['headers']))
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    //alert(JSON.stringify(result))
   // document.getElementById('ld').innerHTML=JSON.stringify(result);
   document.getElementById('ld').innerHTML="";
   for (let i=0; i<result.length; i++){
    
      document.getElementById('ld').innerHTML+="<div class='Bord' id='"+result[i]._id+"' name=''><div class='Reqcard'>"+
      "<div class='top'>"+      
          "<div class='type'>"+result[i].type+"</div>"+
          "<div class='url'>"+result[i].url+"</div>"+
           "<button class='closebtn'>X</button>"+
      "</div><div class='content' id='"+result[i].token+"'>"+result[i].content+"</div>"+"</div></div> "
  
 }
 document.getElementById('ld').innerHTML+="<img class='plus' onclick='showdata()'id='plus' src='./images/add.png'/>" 
changedata();
}

  return< div className='Left' id='Left' >
   
    <div id="ld" className="id">
   
      Loading data...
    </div>
    <form className="auto1" onSubmit={leftdata}>
      <input type='text' name="token" id="token" ></input>
      <button type="submit" id='loadreq'>submit</button>
    </form>
    </div>

} 


export default Left;