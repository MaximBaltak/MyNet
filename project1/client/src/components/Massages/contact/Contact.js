import React from 'react'
import stylse from './Contact.module.css';

function Contact({name,ava}) {
    return (
        <>
          <li key={new Date()} className={stylse.contact}>
              <img src={ava} alt="jpg"/>
              <p>{name}</p>
          </li>     
        </>
    )
}

export default Contact
