import React, { useState } from 'react'
import './Form.css'
function Form({ onAdd }) {
    const [user, setUser] = useState()
    const [age, setAge] = useState()
    function submitHandlere(e) {
        e.preventDefault()
        onAdd({ user, age })
    }
    function userHandler(e) {
        setUser(e.target.value)
    }
    function ageHandler(e) {
        setAge(e.target.value)
    }

    return (
        <>
            <form className="form" onSubmit={submitHandlere}>
                <p>Username</p>
                <label>
                    <input type="text" onChange={userHandler} />
                </label>
                <p>Age (years)</p>
                <label>
                    <input type="number" onChange={ageHandler} />
                </label>
                <br />
                <button className="baa" type="submit">
                    Add User
                </button>
            </form>
        </>
    )
}
export default Form
