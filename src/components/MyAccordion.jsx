import React,{useState} from 'react'
import { questions } from './Questions';
import Accordion from './Accordion';
import './MyAccordion.css'

function MyAccordion() {
     const[data, setData]=useState(questions)
  return<>
  <section className="MyAccordion_heading">
    <h1>React Interview Questions <hr /><hr /></h1>
       {
  data.map((curElement)=>{
    const { id }= curElement;
        return<Accordion key={id} {...curElement}/>
         })
        }  
  </section>
      
</>
}

export default MyAccordion