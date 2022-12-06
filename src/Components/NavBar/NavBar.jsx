import { Link, useNavigate } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';

export default function NavBar({ user, setUser }) {
    const navigate = useNavigate();

    async function logout() {
        try{
            usersAPI.logout();
            setUser();
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <nav>
            <h3>Welcome {user.full_name}</h3>
            <Link to="/">InstaCats!</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}
