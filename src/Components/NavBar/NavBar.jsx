import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'
import * as usersAPI from '../../utilities/users-api';
// import CreatePostModal from '../CreatePostModal/CreatePostModal';

export default function NavBar({ user, setUser, showModal, setShowModal, showLogin, setShowLogin }) {
    const navigate = useNavigate();

    async function logout() {
        try{
            usersAPI.logout();
            setUser(null);
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        {user ?
            <nav id="nav-logged-in">
                <div>
                    <Link to="/"><button>InstaCats!</button></Link>
                    <h3>{user.email.substring(0,user.email.indexOf("@"))}</h3>
                </div>
                <div>
                    <a><button onClick={() => setShowModal(!showModal)}>Make A Post!</button></a>
                    <a><button onClick={logout}>Logout</button></a>
                </div>
            </nav>
            :
            <nav id="nav-not-logged-in">
                <h3>Welcome to InstaCats!</h3>
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
            </nav>

        }
        </>
    );
}
