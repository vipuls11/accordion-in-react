import React,{useState} from 'react'
import { questions } from './Questions';
import Accordion from './Accordion'

function MyAccordion() {
     const[data, setData]=useState(questions)
  return<>
  <section className="">
    <h1>React Interview Questions</h1>
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