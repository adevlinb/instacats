import { useState } from "react";
import { signUp } from '../../utilities/users-api';
import getCSRF from '../../utilities/csrftoken'
import './SignUpForm.css'

export default function SignUpForm({ setUser }) {
    let csrftoken = getCSRF('csrftoken');

    const [formData, setFormData] = useState({
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            confirm: '',
            error: ''
        });

    function handleChange(evt) {
        setFormData({...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const userData = { ...formData };
            delete userData.confirm;
            delete userData.error;
            const user = await signUp(userData);
            setUser(user);
        } catch {
            setFormData({...formData, error: 'Sign Up Failed - Try Again' });
        }
    };


        const disable = formData.password !== formData.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        <label>Full Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                        <label>Nick-Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                        <label>Password</label>
                        <input type="password" autoComplete="off" name="password" value={formData.password} onChange={handleChange} required />
                        <label>Confirm</label>
                        <input type="password" autoComplete="off" name="confirm" value={formData.confirm} onChange={handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{formData.error}</p>
            </div>
        );

}
