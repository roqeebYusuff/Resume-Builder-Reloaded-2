import { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { socialLinksList } from '../utils/atom'
import { useRecoilState } from 'recoil'
import AnimatedPage from './AnimatedPage'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const StepSix = ({prevStep, nextStep}) => {
    const [socials, setSocials] = useRecoilState(socialLinksList)

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Skills</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Form>
                        <div className="single__element border-b">
                            <Row>
                                <Col md='4'>
                                    <div>
                                        <Label>Website</Label>
                                        <Input value={socials.website} onChange={(e) => setSocials({...socials, website: e.target.value})} />
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div>
                                        <Label>Github</Label>
                                        <Input value={socials.github} onChange={(e) => setSocials({...socials, github: e.target.value})} />
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div>
                                        <Label>Linkedin</Label>
                                        <Input value={socials.linkedin} onChange={(e) => setSocials({...socials, linkedin: e.target.value})} />
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div>
                                        <Label>Twitter</Label>
                                        <Input value={socials.twitter} onChange={(e) => setSocials({...socials, twitter: e.target.value})} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
                <div className="btn__wrapper">
                    <div className="d-flex justify-content-between">
                        <Button className="prev__btn" onClick={prevStep}>Back</Button>
                        <Button className="next__btn" onClick={nextStep}>Continue</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepSix