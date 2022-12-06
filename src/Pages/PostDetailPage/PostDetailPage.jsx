import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailPage.css'

export default function PostDetailPage({ posts }) {
    const[postDetail, setPostDetail] = useState(null)
    let postId = useParams();

    useEffect(() => {
        function getPost() {
            let postResult = posts.filter(function(post) {
                if (post.pk === parseInt(postId.postpk)) return post
            });
            setPostDetail(postResult[0])
        }
        getPost();
    }, [postId.postpk, posts]);

    return (
        <>
            <h1>Post Detail Page</h1>
            {postDetail ?
            <div className="post-detail-card" >
                <h5>{postDetail.pk}</h5>
                <h5>{postDetail.name}</h5>
                <img src={`http://catstagram.lofty.codes/media/${postDetail.image}`} alt="kittyimg" />
            </div>
                :
                ""
            }
        </>


    )
}
