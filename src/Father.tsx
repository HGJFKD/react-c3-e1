import React, { useContext } from 'react'
import Child from './Child'
import { UserContext } from './context';

const Father = () => {
    const nameRef = React.useRef<HTMLInputElement>(null);
    const ageRef = React.useRef<HTMLInputElement>(null);
    const context = useContext(UserContext);
    if (!context) return null;
    const { setUser } = context


    return (
        <div>
            <input className="name" placeholder="name" ref={nameRef} />
            <input className="age" type="number" placeholder="age" ref={ageRef} />
            <button onClick={() => {
                setUser({
                    name: `${nameRef.current?.value}`,
                    age: Number(ageRef.current?.value)
                })
            }}>Change</button>
            <Child />
        </div>
    )
}

export default Father