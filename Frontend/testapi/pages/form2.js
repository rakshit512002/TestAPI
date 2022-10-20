export default function Form2() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      
      email: event.target.email.value,
      password:event.target.password.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
//alert(JSONdata);     // API endpoint where we send form data.
    const endpoint = '/login'
    
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
   const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
   const result = await response.json()
    if(`${result.name}`=="undefined")
    { //sweet alert to be used later
      alert('Invalid user name or password');
    }
    else
    {
      window.location.replace("../main");

    }
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
   
    <form  onSubmit={handleSubmit} id="auth2" method ="post">
    <label className='lab1'>Email</label><br></br>
    <input type="email" placeholder="xyz@gamil.com" name="email" id="email" className="email"></input><br></br>
    <label className='lab1'>Password</label><br></br>
    <input type="password" placeholder="*********" name="password" id="password"className="password"></input><br></br>
    <button type="submit" value="submit" className="btn1">
        Login
    </button>
    <p className="linktext" id="link2">Not registered yet ? Sign up.</p>
</form>
  
  )
}