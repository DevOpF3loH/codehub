import React from 'react';
import "./Header.css";
import Avatar from 'react-avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className="header_left">
        <Avatar className="header_avatar"
        alt={user?.displayName}
        src={user?.photoURL} round={true}/>
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder='Search Codehub' />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header