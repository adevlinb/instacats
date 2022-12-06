import { Link, useNavigate } from 'react-router-dom'

export default function NavBar({ user, setUser }) {
    const navigate = useNavigate();

    async function logout() {
        setUser();
        navigate("/")
    }

    return (
        <nav>
            <h3>Welcome {user.full_name}</h3>
            <Link to="/">InstaCats!</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}
