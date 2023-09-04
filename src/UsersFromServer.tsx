import React, { useState, useEffect } from 'react'
import UserCard, { User } from './UserCard'

const UsersFromServer = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(setData)
    }, [])

    return (
        <div>
            {data.map((user) => <UserCard name={user.name} email={user.email} phone={user.phone} id={user.id} username={user.username} />)}
        </div>
    )
}

export default UsersFromServer