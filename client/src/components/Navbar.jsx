import LandingPage from "../layouts/LandingPage"
import { Container } from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { useEffect, useState } from "react";

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                    setShow(false);
                } else { // if scroll up show the navbar
                    setShow(true);
                }

                // remember current page location to use in the next move
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY])

    useEffect(() => {
        document.addEventListener('scroll', e => {
            if (window.scrollY > 100) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        })
    }, [])


    return (
        <>
            <div className={`main__nav py-3 fixed ${show ? 'slide' : 'hide'} ${scrolled ? 'scrolled' : ''}`}>
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="brand">
                            <h4>Resume Builder</h4>
                        </div>
                        <NavLink className='get__started__btn' to='/resume'>
                            {/* <a className="get__started__btn"> */}
                                Get Started
                            {/* </a> */}
                        </NavLink>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar