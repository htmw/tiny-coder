import HomeInfo from './nested-components/HomeInfo';
import HomeImage from './nested-components/HomeImageContainer';
import ServicesContainer from './nested-components/ServicesContainer';
import ContactForm from './nested-components/ContactForm';
import RecommendedLinks from './nested-components/RecommendedLinks';
import { useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { ScrollContext } from '../context/Scroll'

import '../styles/desktop/Main.scss';
import '../styles/tablet/Main.scss';
import '../styles/mobile/Main.scss';

import '../styles/desktop/Services.scss';
import '../styles/tablet/Services.scss';
import '../styles/mobile/Services.scss';

import '../styles/desktop/Contact.scss';
import '../styles/tablet/Contact.scss';
import '../styles/mobile/Contact.scss';


import { Button } from '@mui/material';
import { UserContext } from '../context/user';
import Login from "./Login";
import Home from "./Home";
 
const Logout = () => {
    
    const { logOutUser } = useContext(UserContext);

    const logOut = async () => {
        try {
          const loggedOut = await logOutUser();
          if (loggedOut) {
            window.location.reload(true);
          }
        } catch (error) {
          alert(error)
        }
    }

    logOut();
    
    return (
        <Home />
    )
}


export default Logout;