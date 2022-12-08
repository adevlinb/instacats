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
                <div>
                    <Link to="/"><button>InstaCats!</button></Link>
                    <h3>{user.email.substring(0,user.email.indexOf("@"))}</h3>
                </div>
                <a href=""><button onClick={() => setShowModal(!showModal)}>Make A Post!</button></a>
                <a href=""><button onClick={logout}>Logout</button></a>
            </nav>
            :
            <nav>
                <h3>Welcome to InstaCats!</h3>
            </nav>

        }
        </>
    );
}
