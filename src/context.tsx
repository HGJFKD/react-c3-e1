import React, { createContext, useState } from 'react';

interface UserData {
    name: string;
    age: number;
}
interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}
interface UserContextProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, setUser] = useState<UserData>({ name: 'Israel', age: 30 });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;