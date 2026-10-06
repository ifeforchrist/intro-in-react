import React, { useState, useEffect } from 'react'

const Reg = () => {
    const [form, setForm] = useState(() => {
      const saved = localStorage.getItem("Regform")
      return saved? JSON.parse(saved) : {name: "", email: "", password:""}
    })

    const submit = (e) =>{
        e.preventDefault() 
        alert("registration Successful: " + form.name)
        console.log(form) 
    }

    useEffect(() =>{
      localStorage.setItem("Regform", JSON.stringify(form))
    }, [form])

  return (
     <>
        <form onSubmit={submit}>
            <input
                placeholder='Enter your name'
                required
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}/>

            <input
                placeholder='Enter your email'
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}/>

            <input
                placeholder='Enter your password'
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}/>
                
            <button>Register</button>
        </form>
    </>

  )
}

export default Reg