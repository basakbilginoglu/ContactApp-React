import React, { useState,useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function Contacts() {

    const [contacts,setContacts]=useState([
        {
        fullname:"Nazlı",
        phone_number:"123123"
        },

        {
            fullname:"Golden",
            phone_number:"23345"
        },
        {
            fullname:"retriever",
            phone_number:"123456"
        }

    ])
    
    useEffect(()=>{
     
        console.log(contacts)
    },[contacts])
    
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
