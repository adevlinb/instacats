import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default function LandingPage({ setUser }) {


    return (
        <>
        <h1>Sign In!</h1>
        <SignUpForm setUser={setUser}/>
        </>
    )
}
