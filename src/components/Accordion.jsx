import React,{useState} from 'react';



function Accordion({Question,Answer}) {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div>
            <p onClick={()=>setShow(!show)}>{show? "-":"+"}</p>
            <h2>{Question}</h2>
        </div>
        
        {show && <p>{Answer}</p>}
    </div>
  )
}

export default Accordion