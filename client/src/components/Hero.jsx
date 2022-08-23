import {NavLink} from 'react-router-dom'
import { Container } from "reactstrap"


function Hero() {
    const n = 100
    return (
        <>
            <div className="hero__section d-flex align-items-center justify-content-center text-center overflow-hidden position-relative">
                <Container>
                    <h4>Resume Builder</h4>
                    <h5>Build your portfolio in less than five minutes</h5>
                    <NavLink className="hero__btn"  to='/resume'>
                        {/* <a className="hero__btn"> */}
                            Get Started
                        {/* </a> */}
                    </NavLink>
                </Container>
                {
                    [...Array(n)].map((e, i) => (
                        <div className="circle-container" key={i}>
                            <div className="circle"></div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Hero