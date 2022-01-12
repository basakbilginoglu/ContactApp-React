import React, { useState } from 'react'


function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ fullname: "", phone_number: "" })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addContact([...contacts, form])
        setForm({fullname:"",phone_number:""})

    }
    return (
        <form onSubmit={onSubmit}>

            <div>
                <input name="fullname"
                    placeholder="Fullname"
                    value={form.fullname}
                    onChange={onChangeInput}>

                </input>
            </div>

            <div>
                <input 
                name="phone_number"
                 placeholder="Phone Number" 
                 onChange={onChangeInput}
                 value={form.phone_number} >
               
                </input>
            </div>

            <div className="btn"><button>Add</button></div>
        </form>
    )
}

export default Form
