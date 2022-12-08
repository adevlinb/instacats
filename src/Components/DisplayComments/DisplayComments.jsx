import './DisplayComments.css'

export default function DisplayComments({ comment }) {
    return (
        <div className='comment'>
            <h5>{comment.text.substring(0,30)}</h5>
            <h5>{comment.timestamp_created.substring(0,10)}</h5>
        </div>
    )
}
