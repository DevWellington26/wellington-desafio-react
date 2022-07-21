import './App.css';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import SearchButton from './components/SearchButton';
import ScreenSearch from './components/screens/ScreenSearch';
import ScreenProfile from './components/screens/ScreenProfile';
import { useState } from 'react';

function App() {

  const [profileLoaded, setProfileLoaded] = useState(false);

  const [profile, setProfile] = useState(null)
  const [repositories, setRepository] = useState(null)

  const handler = _ => {
    setProfileLoaded(true);
  }

  return (
    <div>
      {profileLoaded ? <ScreenProfile profile={profile} repositories={repositories} /> : <ScreenSearch handler={handler} setProfile={setProfile} setRepository={setRepository} />}
    </div>
  );
}

export default App;
