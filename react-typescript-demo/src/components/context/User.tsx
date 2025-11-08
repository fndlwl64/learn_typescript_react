import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext.setUser({
            name: "John Doe",
            email: "john@example.com"
        });
    };
    const handleLogout = () => {
        userContext.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {userContext.user?.name}</div>
            <div>Email is {userContext.user?.email}</div>
        </div>
     );
}