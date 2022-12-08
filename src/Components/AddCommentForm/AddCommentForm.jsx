import { useState } from 'react';
import getCSRF from '../../utilities/csrftoken'

export default function AddCommentForm({submitComment, postPK}) {
    const csrftoken = getCSRF('csrftoken');
    const [formData, setFormData] = useState({
        text: '',
        entry: postPK
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        submitComment(formData)
        setFormData({
            text: '',
            entry: postPK
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                <input type="text"
                    id="add-comment"
                    required
                    placeholder="Add Comment"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    style={{ width: "80%" }}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
