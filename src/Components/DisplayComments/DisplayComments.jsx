import './DisplayComments.css'

export default function DisplayComments({ comment }) {
    return (
        <div className='comment'>
            <h5>{comment.text}</h5>
            <h5>{comment.timestamp_created}</h5>
        </div>
    )
}
