import { Col, Container, Row } from "reactstrap"
import { how } from '../utils/data'
import Heading from "./Heading"


function Features() {
    return (
        <>
            <div className="how bg-light section__spacing">
                <Container>
                    <Heading subtitle='How it works' title='How it works' />
                    <Row className="g-5">
                        {
                            how.map((stage, index) => (
                                <Col md='6' key={index}>
                                    <div className={`single ${(index+1) % 2 == 0? 'right': ''} `}>
                                        <p className="stage">
                                            {index + 1}
                                        </p>
                                        <h4 className="title">{stage.title}</h4>
                                        <p className="description">{stage.description}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

                {/* Quick 5-minute resume maker that is 100% customized to your experience, without any hassles or unnecessary tasks.

                    Instantly share it on popular sites to get noticed by potential employers.

                    Zero cost, zero commitment.

                    —

                    No more mountains of paperwork.

                    Start your job search in 5 minutes or less.

                    Leverage the latest technology to give you an edge against other job seekers. */}
            </div>
        </>
    )
}

export default Features