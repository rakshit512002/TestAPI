import Script from "next/script"
export default function NewReq()
{const createdata = async (e) => {
    e.preventDefault()
    alert('hello');
    // Stop the form from submitting and refreshing the page.
    //event.preventDefault();
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
  alert(typex)
    const data = {
        type: typex,
        content: e.target.Body.value,
        url :e.target.link.value,
        token:e.target.usertoken.value,
      }
      alert(e.target.token1.value)
      alert(data)
      
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
      alert(JSONdata)
     // alert(JSONdata);
  //alert(JSONdata);     // API endpoint where we send form data.
      const endpoint = '/proxy/api/requests/create'
      
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          Authorization:e.target.token1.value
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata
    }
        const response = await fetch(endpoint, options)
 
       
       const result = await response.json()
        alert(JSON.stringify(result))

    // Send the form data to our forms API on Vercel and get a response.
  
}
    return <div className="NewReq">
        <Script src="scripts/newreq.js"></Script>
        <form  onSubmit={createdata} className="reqform">
        <input type='text' name="token" id="token1" className="token hide"></input>
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
      <button type="submit" value="submit" id='createreq' className="btn4">Create New request</button>
        </form>
    </div>
}