import { useState } from 'react';

export default function UserLoginPage({ setUser }) {

    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    function handleLogin(evt) {
        evt.preventDefault();
        setUser(formData);
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="name">
                    Enter Username:
                    <input type="text" id="name" value={formData.name} name="name" onChange={handleChange} />
                </label>
                <label htmlFor="password">
                    Enter Password:
                    <input type="text" id="password" value={formData.password} name="password" onChange={handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
