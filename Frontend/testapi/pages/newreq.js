import Script from "next/script"
import swal from 'sweetalert';
export default function NewReq()
{

  const createdata = async (e) => {
    e.preventDefault()
   // alert('hello');
    // Stop the form from submitting and refreshing the page.
    //event.preventDefault();
  
    const button =document.activeElement.getAttribute('value');
    const a=document.getElementById('GET').checked;
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
  //alert(typex)
 
  if(button=="create")
  {const endpoint = '/proxy/api/requests/create';
  const data = {
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
  }
  const JSONdata=JSON.stringify(data);
 
  const options = {
  
    method: 'POST',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
    body: JSONdata
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   if(`${result.url}`=="undefined")
   { //sweet alert to be used later
     
     swal({
       title: "Please fill all the fields",
       
       icon: "error",
       button: "Try again",
     });
}
}
else if(button=="save")
{
  const endpoint = '/proxy/api/requests/';
  endpoint+=e.target._id.value;
  const data = {
    
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
    
  }
  const JSONdata=JSON.stringify(data);
  const options = {
  
    method: 'PUT',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
    body: JSONdata
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   
   if(`${result.url}`=="undefined")
   { //sweet alert to be used later
     
     swal({
       title: "Please fill all the fields",
       
       icon: "error",
       button: "Try again",
     });
}
}
else if(button=="del")
{
  const endpoint = '/proxy/api/requests/';
  endpoint+=e.target._id.value;
  
  
  const options = {
  
    method: 'DELETE',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
   
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
}
else if(button=="run")
{
  
  const endpoint = '/proxy/api/requests/send/';
  endpoint+=e.target._id.value;
  const data = {
    
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
    
  }
  const JSONdata=JSON.stringify(data);
  const options = {
  
    method: 'GET',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
   
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   
   
     
     swal({
      title:"Result",
       text:JSON.stringify(result)
       
     });


   
}
  
}
    return <div className="NewReq">
        
        <form   className="reqform" id="reqform" onSubmit={createdata}>
        <input type='text' name="token" id="token1" className="token hide"></input>
        <input type='text' name='_id' id='_id' className="hide" ></input>
        <div className="radbtn">
        <input type='radio' name="reqtype" id='GET' checked="checked"/>
        <label for= 'GET' id='GET'>GET</label>
        <br></br>
        <input type='radio' name="reqtype" id='POST'/>
        <label for= 'POST' id='POST'>POST</label>
        <br></br><input type='radio' name="reqtype" id='PUT'/>
        <label for= 'PUT' id='PUT'>PUT</label>
        <br></br><input type='radio' name="reqtype" id='DELETE'/>
        <label for= 'DELETE' id='DELETE'>DELETE</label>
        <br></br>
       
        </div>
        <div className="extra">
        <label className="URL" id='URL'>URL</label>
        <input type='text' placeholder="http://www.google.com" className="link"  id="link"></input>
        </div>
        <br></br>
        <textarea placeholder='{"name ":"Rajat", "id":4}' className="Body" id="Body" ></textarea>
        <br></br>
        <input type='text' placeholder='asdyfaksvh usdfkuhsahfsudgsdf sgdshgdgudif' className="usertoken" id="usertoken"></input>
        <br></br>
      <button type="submit" name="createreq" value="create" id='createreq' className="btn4">Create New request</button>
      <div className="btnlist" id="btnlist">
        <button type="submit" className="savebtn" id="savebtn" value="save">Save</button>
        <button type="submit" className="delbtn" id="delbtn" value="del">Delete</button>
        <button type="submit" className="runbtn" id="runbtn" value="run"> Run </button>
      </div>
        </form>
    </div>
}