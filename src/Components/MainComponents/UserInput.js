import React from 'react'
import './UserInput.css'
import Card from '../UI/Card'
function UserInput({ items }) {
    return (
        <Card>
            <ul className="ull">
                {items.map((item) => (
                    <li key={Math.round(Math.random() * 100000)} className="ll">
                        {item.user}, ({item.age}) Years Old
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UserInput
