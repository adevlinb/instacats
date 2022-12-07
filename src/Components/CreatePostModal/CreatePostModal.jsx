import { useState, useRef } from 'react';
import './CreatePostModal.css'
import getCSRF from '../../utilities/csrftoken'


export default function CreatePostModal({ showModal, setShowModal, handlePhotoUpload }) {
    const csrftoken = getCSRF('csrftoken');
    const [title, setTitle] = useState('');
    const fileInputRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (fileInputRef.current.value === '' || title === '') return;
        const formData = new FormData()
        formData.append('csrftoken', csrftoken)
        formData.append('name', title)
        formData.append('image', fileInputRef.current.files[0]);
        console.log(formData, "upload pic", fileInputRef)
        handlePhotoUpload(formData);
        setShowModal(!showModal);
        setTitle('');
        fileInputRef.current.value = '';
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={() => setShowModal(!showModal)}>X</button>
                <div className="modal-title">
                    <h1>Make a post!</h1>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                        <input type="file" ref={fileInputRef} required/>
                        <input value={title} onChange={(evt) => setTitle(evt.target.value)} required placeholder="Photo Title" />
                        <button type='submit'>Upload Post</button>
                    </form>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    )
}
