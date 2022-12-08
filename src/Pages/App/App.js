import { useState, useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import PostsListPage from '../PostsListPage/PostsListPage'
import LandingPage from '../LandingPage/LandingPage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';
import CreatePostModal from '../../Components/CreatePostModal/CreatePostModal';
import Footer from '../../Components/Footer/Footer';
import * as postsAPI from '../../utilities/posts-api'

export default function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

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
              <Route path="/post/:postpk" element={<PostDetailPage posts={posts} setPosts={setPosts}/>} />
              <Route path="*" element={<PostsListPage posts={posts}/>} />
          </Routes>
          <Footer />
          {showModal && <CreatePostModal showModal={showModal} setShowModal={setShowModal} handlePhotoUpload={handlePhotoUpload} />}
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} showModal={showModal} setShowModal={setShowModal} showLogin={showLogin} setShowLogin={setShowLogin}/>
          <div className='body-container-landing'>
            <LandingPage setUser={setUser} showLogin={showLogin}/>
            <div id="cross-fade">
              <img src="https://media.istockphoto.com/id/1249884596/photo/cool-cat-with-shades.jpg?s=612x612&w=0&k=20&c=8NJ1g2Jf60iVTMnPNPN_iIZbyyQf_mImgDmSl0NHeiI=" alt="coolkitty1" />
              <img src="https://thediscerningcat.com/wp-content/uploads/2021/02/tabby-cat-wearing-sunglasses.jpg" alt="coolkitty2" />
              <img src="https://wallpaperaccess.com/full/82955.jpg" alt="coolkitty2" />
              <img src="https://images.squarespace-cdn.com/content/v1/5ca268ee01232c1d4131debd/1635466037445-MZYSB3WNAHHLAV3KGVBE/unsplash-image-yMSecCHsIBc.jpg?format=1500w" alt="coolkitty2" />
            </div>
          </div>
        </>
      }
    </>
  );
}
