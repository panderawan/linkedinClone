import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import Gobbler from './svg-gobbler.svg'

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://img.icons8.com/fluency/452/linkedin.png' alt='' />

        <div className='header__search'>
          <SearchIcon />
          {/* search Icon */}

          <input type='text' placeholder='Recherche' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Accueil' />
        <HeaderOption Icon={SupervisorAccountIcon} title='Réseau' />
        <HeaderOption Icon={BusinessCenterIcon} title="Offres d'emploi" />
        <HeaderOption Icon={ChatIcon} title='Messagerie' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} title='Vous' onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
