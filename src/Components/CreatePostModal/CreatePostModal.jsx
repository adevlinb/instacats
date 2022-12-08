import { useState, useRef } from 'react';
import './CreatePostModal.css'
import getCSRF from '../../utilities/csrftoken'


export default function CreatePostModal({ showModal, setShowModal, handlePhotoUpload }) {
    const csrftoken = getCSRF('csrftoken');
    const [title, setTitle] = useState('');
    const fileInputRef = useRef();

    const [image, setImage] = useState(null)
    const placeholder = "https://www.namepros.com/attachments/empty-png.89209/";
    function onImageError (evt) {
        evt.target.src = placeholder;
    }

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

    function handleChangeImage(evt) {
        setImage(URL.createObjectURL(evt.target.files[0]))
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <button id="close-button" onClick={() => setShowModal(!showModal)}>X</button>
                <img src={image ? image : placeholder} alt="kittyimg" onError={onImageError} />
                <div className="modal-title">
                    <h1>Make a post!</h1>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                        <div>
                            <input type="file" ref={fileInputRef} required onChange={handleChangeImage} />
                            <input value={title} onChange={(evt) => setTitle(evt.target.value)} required placeholder="Photo Title" />
                        </div>
                        <button type='submit'>Upload Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
