import './PostsListPage.css';
import DisplayPostCards from '../../Components/DisplayPostCards/DisplayPostCards';
import { useState, useEffect } from 'react';

export default function PostsListPage({ posts }) {
    const [postsToShow, setPostsToShow] = useState(10)
    const [postsToMap, setPostsToMap] = useState([]);

    useEffect(() => {
        function setPosts() {
            let newArr = [];
            for (let i = 0; i < posts.length; i++) {
                if (i < postsToShow) {
                    newArr.push(posts[i])
                } else {
                    break
                }
            }
            setPostsToMap(newArr);
        }
        setPosts();
    }, [postsToShow]);

    function showMorePosts() {
        setPostsToShow(initial => initial + 10);
    }


    const displayPosts = postsToMap.map((post) => (
        <DisplayPostCards post={post} key={post.pk}/>
    ));

    return (
        <div className='body-container'>
            <div className='posts-container'>
                {displayPosts}
                <button onClick={showMorePosts}>Show More Cats</button>
            </div>

        </div>
    )
}
