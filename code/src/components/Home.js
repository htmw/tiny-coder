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
 


import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Banner from "./components/Banner/Banner";
import Membership from "./components/Membership/Membership";
import Testimonials from "./components/Testimonials/Testimonials";
import Calories from './Calories';
import Recipes from './Recipes';
import MealPlanning from './MealPlanning';


const Home = () => {
    
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
    
    const location = useLocation();
    
    const [searchParams] = useSearchParams();

    const { scroll } = useContext(ScrollContext);

    const contactFormRef = useRef(null);

    useEffect(() => {
        if (location.pathname === "/" && location.search !== "?to=Contact") {
            window.scrollTo(0, 0)
        }
    }, [location.pathname, location.search]);

    // Checks if browser search params contains "to"
    // "to=Contact" is added to search params when user click "Contact" in navigation menu
    // on page render or on update of global state(scroll), if "to=Contact", page scrolls to contact form
    useEffect(() => {
        const scrollTo = searchParams.get("to");
        if (scrollTo === "Contact") {
            contactFormRef.current.scrollIntoView();
        }
    }, [searchParams, scroll])

    return (
        <main className="home">
            <Main />
            <Services />
            <Calories />
            {/* <Membership />
            <Testimonials /> */}
            <Contact contactFormRef={contactFormRef} />
        </main>
    )
}

const Main = () => {
    return (
        <section className="main-section">
            <HomeInfo />
            <HomeImage />
        </section>
    )
}

const Services = () => {
    return (
        <section className="main-section">
            {/* <ServicesContainer /> */}
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div className="container">
                {/* <Navbar /> */}
                <Hero />
                {/* <Program /> */}
                {/* <About /> */}
                {/* <Benefits /> */}
                {/* <Banner /> */}
                {/* <Membership /> */}
                {/* <Testimonials /> */}
                {/* <Footer /> */}
                </div>
            </ThemeProvider>
            {/* <div className="overlay"></div> */}
        </section>
    )
}

const Contact = ({ contactFormRef}) => {
    return(
        <>
            <section className="contact-section">
                <ContactForm contactFormRef={contactFormRef} />
                <RecommendedLinks />
            </section>
        </>
    )
}

// export default function Home() {

//  return (
//    <>
//      <h1>Welcome to Expengo</h1>
//      <Button variant="contained" onClick={logOut}>Logout</Button>
//    </>
//  )
// }

// const LogOutBtn = () => {
//     return (
//         <>
//           <Button variant="contained" onClick={logOut}>Logout</Button>
//         </>
//       )
// }

export default Home;




