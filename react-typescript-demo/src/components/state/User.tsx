import { useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
};

export const LoginedIn = () => {
    const [user, setUser] = useState<AuthUser | null>(null);


    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "john@example.com"
        });
    };
    const handleLogout = () => {
        setUser(null);
    } ;
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name}</div>
            <div>Email is {user?.email}</div>
        </div>
     );
}