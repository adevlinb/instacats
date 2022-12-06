import { useState, useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import PostsListPage from '../PostsListPage/PostsListPage'
import LandingPage from '../LandingPage/LandingPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';

export default function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);


    useEffect(() => {
      async function getPosts() {
        const pResults = await fetch(`http://catstagram.lofty.codes/api/posts/`);
        let postsResults = await pResults.json();
        setPosts(postsResults)
      }
      getPosts();
    }, [user]);

  return (
    <>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/profile" element={<ProfileDetailPage />} />
            <Route path="/post/:postpk" element={<PostDetailPage posts={posts}/>} />
            <Route path="*" element={<PostsListPage posts={posts}/>} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser}/>
      }
    </>
  );
}
