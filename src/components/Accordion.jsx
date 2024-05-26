import React,{useState} from 'react';
import './Accordion.css';



function Accordion({Question,Answer}) {
    const [show, setShow] = useState(false);
  return (
    <div className='Accordion'>
        <div className='Accordion_Question'>
            <p onClick={()=>setShow(!show)} className='Accordion_Plus'>{show? "-":"+"}</p>
            <h4>{Question}</h4>
        </div>
        
        {show && <p className='Accordion_Answer'>{Answer}</p>}
    </div>
  )
}

export default Accordion