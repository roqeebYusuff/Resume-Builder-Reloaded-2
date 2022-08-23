import { Col, Row } from "reactstrap"
import Heading from "./Heading"
import { FcCamera } from 'react-icons/fc'


const HowItWorks = () => {
  return (
    <>
      <div className="section__spacing bg-light features">
        <div className="container">
          <Heading subtitle='Why EasyResume' title='Why EasyResume' />
          <Row className="g-4">
            <Col md='4'>
              <div className="single border rounded-3 p-4">
                <FcCamera size={60} />
                <h4 className="my-2 ">Simple & modern design</h4>
                <p className="text">
                  EasyResume has a library of professionally-designed templates that will make your resume look great.
                </p>
              </div>
            </Col>
            <Col md='4'>
              <div className="single border rounded-3 p-4">
                <FcCamera size={60} />
                <h4 className="my-2 ">No time? No problem!</h4>
                <p className="text">
                  EasyResume makes resumes quick and easy to create so you can have a professional resume in no time.
                </p>
              </div>
            </Col>
            <Col md='4'>
              <div className="single border rounded-3 p-4">
                <FcCamera size={60} />
                <h4 className="my-2 ">Free & easy to use</h4>
                <p className="text">
                  Just enter your information and EasyResume will instantly generate a professional-looking resume that you can use in just a few minutes.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default HowItWorks