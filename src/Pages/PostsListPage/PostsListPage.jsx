import './PostsListPage.css';
import DisplayPostCards from '../../Components/DisplayPostCards/DisplayPostCards';
// import { useState, useEffect } from 'react';

export default function PostsListPage({ posts }) {
    // let postsToShow = 10;
    // const [postsToMap, setPostsToMap] = useState([]);

    // useEffect(() => {
    //     function setPosts() {
    //         let newArr = [];
    //         for (let i = 0; i < posts.length; i++) {
    //             if (i < postsToShow) {
    //                 newArr.push(posts[i])
    //             } else {
    //                 break
    //             }
    //         }
    //         console.log(newArr, "showmore")
    //         setPostsToMap(newArr);
    //     }
    //     setPosts();
    // }, []);

    function showMoreCats() {
    //     postsToShow = postsToShow + 10;
    //     console.log(postsToShow, "number")
    //     let newArr = [];
    //     for (let i = 0; i < postsToShow; i++) {
    //             // newArr.push(posts[i])

    //             console.log(i, "button")
    //     }
    //     // setPostsToMap(newArr);
    }


    const displayPosts = posts.map((post) => (
        <DisplayPostCards post={post} key={post.pk}/>
    ));

    return (
        <div className='posts-container'>
            {displayPosts}
            <button onClick={showMoreCats}>Show More Cats</button>
        </div>
    )
}
