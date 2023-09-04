import React, { useContext } from 'react';
import { UserContext } from './context';


const ChildComponent: React.FC = () => {
    const context = useContext(UserContext);
    if (!context) return null;
    const { user } = context

    return (
        <div >
            <h4>Child</h4>
            <div> User Name: {user.name} </div>
            <div> User Age: {user.age} </div>

        </div >
    );
};

export default ChildComponent;