import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

const Cta = () => {
    return (
        <>
            <div className="cta section__spacing" style={{ backgroundImage: `url(/pattern.png)` }}>
                <Container>
                    <Row className="cta__wrapper justify-content-center align-items-center">
                        <Col md='8'>
                            <h3>Create a professional resume in minutes.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi cupiditate culpa officia consequuntur saepe amet voluptatibus laboriosam soluta recusandae quod, magnam non fugiat perspiciatis libero maxime! Saepe, asperiores officiis.</p>
                            <NavLink to='/'>
                                <a className="btn btn-dark">Create Resume</a>
                            </NavLink>                     
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cta
