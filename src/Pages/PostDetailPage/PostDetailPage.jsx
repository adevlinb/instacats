import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailPage.css'
import DisplayComments from '../../Components/DisplayComments/DisplayComments';
import AddCommentForm from '../../Components/AddCommentForm/AddCommentForm';
import * as commentsAPI from '../../utilities/comments-api'

export default function PostDetailPage({ posts, setPosts }) {
    const[postDetail, setPostDetail] = useState(null)
    const placeholder = "data:image/jpeg;base64,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"
    let image;
    let comments;
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

    if (postDetail) {
        image = `http://catstagram.lofty.codes/media/${postDetail.image}`
        comments = postDetail.comments.reverse().map((comment) => (
            <DisplayComments comment={comment} key={comment.pk} />
        ));
    }
    const onImageError = (e) => {
        e.target.src = placeholder;
    }

    async function submitComment(commentData) {
        await commentsAPI.postComment(commentData);
        const pResults = await fetch(`http://catstagram.lofty.codes/api/posts/`);
        let postsResults = await pResults.json();
        setPosts(postsResults);
    }


    return (
        <div className='body-container'>
            {postDetail ?
            <div className="post-detail-card" >
                <div className='details-container'>
                    <img src={image ? image : placeholder} alt="kittyimg" onError={onImageError} />
                    <h5>{postDetail.name}</h5>
                    <AddCommentForm submitComment={submitComment} postPK={postDetail.pk}/>
                </div>
                <div className='comments-container'>
                    {comments}
                </div>
            </div>
                :
                ""
            }
        </div>

    )
}
