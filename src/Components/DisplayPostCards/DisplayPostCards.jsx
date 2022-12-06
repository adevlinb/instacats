import './DisplayPostCards.css';
import { Link } from 'react-router-dom'

export default function DisplayPostCards({ post }) {

    return (
        <div className='post-card'>
            <img src={`http://catstagram.lofty.codes/media/${post.image}`} alt="kittyimg" />
            <h5><Link to={`/post/${post.pk}`}>{post.name.substring(0, 10)}</Link></h5>

        </div>
    )
}
