import { useState, useEffect, useRef } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import PostsListPage from '../PostsListPage/PostsListPage'
import LandingPage from '../LandingPage/LandingPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import CreatePostModal from '../../Components/CreatePostModal/CreatePostModal';
import * as postsAPI from '../../utilities/posts-api'

export default function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      async function getPosts() {
        const pResults = await fetch(`http://catstagram.lofty.codes/api/posts/`);
        let postsResults = await pResults.json();
        setPosts(postsResults)
      }
      getPosts();
    }, [user]);

    async function handlePhotoUpload(formData) {
      await postsAPI.createPost(formData)
      const pResults = await fetch(`http://catstagram.lofty.codes/api/posts/`);
      let postsResults = await pResults.json();
      setPosts(postsResults)
    }

  return (
    <>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} showModal={showModal} setShowModal={setShowModal} />
          <Routes>
            <Route path="/profile" element={<ProfileDetailPage />} />
            <Route path="/post/:postpk" element={<PostDetailPage posts={posts} setPosts={setPosts}/>} />
            <Route path="*" element={<PostsListPage posts={posts}/>} />
          </Routes>
          {showModal && <CreatePostModal showModal={showModal} setShowModal={setShowModal} handlePhotoUpload={handlePhotoUpload} />}
        </>
        :
        <LandingPage setUser={setUser}/>
      }
    </>
  );
}
