import { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import CatsListPage from '../CatsListPage/CatsListPage'
import LandingPage from '../LandingPage/LandingPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/profiles/:profileID" element={<ProfileDetailPage />} />
            <Route path="/" element={<CatsListPage />} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser}/>
      }
    </>
  );
}
