import { useState } from 'react';
import * as usersAPI from '../../utilities/users-api'
import getCSRF from '../../utilities/csrftoken'


export default function LoginForm({ setUser }) {
    
    let csrftoken = getCSRF('csrftoken');

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const user = await usersAPI.login(credentials);
            if (user) {
                setUser(user);
            }
        } catch (err) {
            console.log(err)
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" autoComplete="off" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}
