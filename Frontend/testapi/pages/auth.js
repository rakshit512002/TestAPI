import Script from 'next/script'
export default function Login()
{
return <div className='logpg'><center><div className="authbody" id='authbody'>
    <form action="https://localhost:5000/api/users" method ="post" id="auth1">
        <label className='lab1'>Name</label><br></br>
        <input type="text" placeholder="Enter Your Name" name="name" className="name"></input><br></br>
        <label className='lab1'>Email</label><br></br>
        <input type="email" placeholder="xyz@gamil.com" name="email" className="email"></input><br></br>
        <label className='lab1'>Password</label><br></br>
        <input type="password" placeholder="*********" name="password" className="password"></input><br></br>
        <button type="submit"  value="submit" className="btn1">
            Sign Up
        </button>
        <p className="linktext" id="link1">Already registered user ? Sign in.</p>
        
    </form>
    <form action="https://localhost:5000/api/users/login" id="auth2" method ="post">
        <label className='lab1'>Email</label><br></br>
        <input type="email" placeholder="xyz@gamil.com" name="email" className="email"></input><br></br>
        <label className='lab1'>Password</label><br></br>
        <input type="password" placeholder="*********" name="password" className="password"></input><br></br>
        <button type="submit" value="submit" className="btn1">
            Login
        </button>
        <p className="linktext" id="link2">Not registered yet ? Sign up.</p>
    </form>
</div>
<Script src="scripts/auth.js"></Script>
</center>
</div>

}