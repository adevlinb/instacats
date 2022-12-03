import { Link } from 'react-router-dom'


export default function NavBar({ user }) {
    return (
        <nav>
            <h3>Welcome {user.name}</h3>
            <Link to="/">InstaCats!</Link>
        </nav>
    );
}
