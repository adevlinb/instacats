import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function LandingPage({ setUser, showLogin }) {

    return (
        <>
            {showLogin ?
                <div>
                    <LoginForm setUser={setUser} />
                </div>
                :
                <div>
                    <SignUpForm setUser={setUser} />
                </div>
            }
        </>
    )
}
