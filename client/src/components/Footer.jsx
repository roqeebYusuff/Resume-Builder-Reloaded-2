import { Col, Container, Row } from "reactstrap"

function Footer() {
  return (
    <>
        <footer className="bg-dark text-white section__spacing footer">
            <Container>
                <Row>
                    <Col className="">
                    
                    </Col>
                </Row>
                <div className="copyright text-center opacity-5">
                    <span>&copy; {new Date().getFullYear()}. Made with love by Roqeeb</span>
                </div>
            </Container>
        </footer>
    </>
  )
}

export default Footer