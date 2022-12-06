import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { useState } from 'react';

export default function LandingPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            {showLogin ?
                <div className="vertical">
                    <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                    <LoginForm setUser={setUser} />
                </div>
                :
                <div className="vertical">
                    <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
                    <SignUpForm setUser={setUser} />
                </div>
            }
        </>
    )
}
