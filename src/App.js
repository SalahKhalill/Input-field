import React, { useState } from 'react'
import Form from './Components/MainComponents/Form'
import UserInput from './Components/MainComponents/UserInput'
import FirstInvalid from './Components/MainComponents/FirstInvaild'
import SecondInvalid from './Components/MainComponents/SecondInvalid'
function App() {
    const [items, setItems] = useState([])
    const [invalidInput, setInvalidInput] = useState(false)
    const [, setButtonDisabled] = useState(false)

    const [isAge, setIsAge] = useState(false)
    const onAdd = ({ user, age }) => {
        if (user && age < 0) {
            setIsAge(true)
        }
        if (user && age > 0) {
            setInvalidInput(false)
            setItems([...items, { user, age }])
        } else {
            setInvalidInput(true)
        }
    }

    function onClosed() {
        setInvalidInput(false)
        setButtonDisabled(false)
        setIsAge(false)
    }
    return (
        <>
            <Form onAdd={onAdd} on />
            {items.length > 0 && <UserInput items={items} />}
            {invalidInput && <FirstInvalid onClosed={onClosed}></FirstInvalid>}
            {isAge && <SecondInvalid onClosed={onClosed}></SecondInvalid>}
        </>
    )
}

export default App
