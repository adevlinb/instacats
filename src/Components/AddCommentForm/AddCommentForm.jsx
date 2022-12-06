import { useState } from 'react';

export default function AddCommentForm({submitComment, postPK}) {
    const [formData, setFormData] = useState({
        text: '',
        entry: postPK
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    return (
        <>
            <form onSubmit={() => submitComment(formData)}>
                <input type="text" name="text" value={formData.text} onChange={handleChange}/>
                <button type='submit'>Add Comment!</button>
            </form>
        </>
    )
}
