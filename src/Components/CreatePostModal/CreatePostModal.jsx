import { useState } from 'react';
import './CreatePostModal.css'

export default function CreatePostModal({ showModal, setShowModal }) {
    const [formData, setFormData] = useState({});

    function handleSubmit(evt) {
        evt.preventDefault();

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
                        <input type="text" namne="photo-file"/>
                        <input type="text" name="title" />
                        <button type="submit">Upload Post</button>
                    </form>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    )
}
