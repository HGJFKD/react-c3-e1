import React from 'react'

export interface User {
    address: { street: string, suite: string, city: string, zipcode: string, geo?: {} }
    company: { name: string, catchPhrase: string, bs: string }
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

const UserCard = ({ name, email, phone, id, username }): JSX.Element => {

    return (
        <div id="card">
            <p><strong>name:</strong>  {name}</p>
            <p><strong>email:</strong> {email}</p>
            <p><strong>phone:</strong> {phone}</p>
            <p><strong>id:</strong> {id}</p>
            <p><strong>username:</strong>{username}</p>
        </div>
    )
}

export default UserCard