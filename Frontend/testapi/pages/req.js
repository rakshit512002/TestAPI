export default function Req(props)
{return <div className="Reqcard">
    <div className='top'>
    
        <div className="type">{props.Type}</div>
        <div className="url">{props.URL}</div>
         <button className="closebtn">X</button> 
    </div>
    <div className="content">{props.Content}</div>
    
    
     </div>;
}