import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import * as usersAPI from '../../utilities/users-api';
import CreatePostModal from '../CreatePostModal/CreatePostModal';

export default function NavBar({ user, setUser, showModal, setShowModal }) {
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
        <>
        {user ?
            <nav id="nav">
                <h3>Welcome {user.email}</h3>
                <Link to="/">InstaCats!</Link>
                <button onClick={() => setShowModal(!showModal)}>Make A Post!</button>
                <button onClick={logout}>Logout</button>
            </nav>
            :
            <nav>
                <h3>Welcome to InstaCats!</h3>
            </nav>

        }
        </>
    );
}
