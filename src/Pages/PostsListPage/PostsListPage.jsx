import './PostsListPage.css';
import DisplayPostCards from '../../Components/DisplayPostCards/DisplayPostCards';
import { useState, useEffect } from 'react';

export default function PostsListPage({ posts }) {
    const [postsToShow, setPostsToShow] = useState(posts.length - 10)
    const [postsToMap, setPostsToMap] = useState([]);

    useEffect(() => {
        function setPosts() {
            let newArr = [];
            let i = posts.length - 1;
            while (i > postsToShow) {
                newArr.push(posts[i]);
                i--;
            }
            setPostsToMap(newArr);
        }
        setPosts();
    }, [postsToShow, posts]);

    function showMorePosts() {
        setPostsToShow(initial => initial - 10);
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
