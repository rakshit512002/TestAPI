import Script from 'next/script'
import Form1 from './form1'
import Form2 from './form2'
export default function Login()
{
return <div className='logpg'><center><div className="authbody" id='authbody'>
    <Form1></Form1>
    <Form2></Form2>
    
</div>
<Script src="scripts/auth.js"></Script>
</center>
</div>

}