export default function Req(props)
{return <div className="Bord"><div className="Reqcard">
    <div className='top'>
    
        <div className="type">{props.Type}</div>
        <div className="url">{props.Url}</div>
         <button className="closebtn">X</button> 
    </div>
    <div className="content">{props.Content}</div>
    
    
     </div></div>;
}
