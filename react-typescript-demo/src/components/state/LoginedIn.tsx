import { useState } from 'react';

export const LoginedIn = () => {
    const [isLoginedIn, setIsLoginedIn] = useState(false);
    
    const handleLogin = () => {
        setIsLoginedIn(true);
    };
    const handleLogout = () => {
        setIsLoginedIn(false);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoginedIn ? "logined in" : "logged out"}</div>
        </div>
    );
}