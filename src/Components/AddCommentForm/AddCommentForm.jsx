import { useState } from 'react';

export default function AddCommentForm({submitComment, postPK}) {
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="add-comment">Add A Comment
                <input type="text" id="add-comment" name="text" value={formData.text} onChange={handleChange}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
