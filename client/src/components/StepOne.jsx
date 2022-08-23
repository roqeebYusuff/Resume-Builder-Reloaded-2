import { useState } from "react"
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from "reactstrap"
import { useRecoilState } from 'recoil'
import { personalInfoList } from '../utils/atom'
import AnimatedPage from "./AnimatedPage"
import { Notify } from 'notiflix/build/notiflix-notify-aio'

function StepOne({ nextStep, prevStep }) {
    const [personalInfos, setPersonalInfos] = useRecoilState(personalInfoList)

    const handleNextCLicked = () => {
        if (personalInfos.firstName !== '' && personalInfos.lastName !== '' && personalInfos.middleName !== '' && personalInfos.email !== '' && personalInfos.telephone !== '') {
            nextStep()
        }
        else {
            Notify.failure('Required fields cannot be left empty', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Personal Information</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Form>
                        <div className="single__element">
                            <Row>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label for="firstName">
                                            FirstName<span className="important">*</span>
                                        </Label>
                                        <Input id="firstName" value={personalInfos.firstName} onChange={(e) => setPersonalInfos({ ...personalInfos, firstName: e.target.value })} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label for="firstName">
                                            LastName<span className="important">*</span>
                                        </Label>
                                        <Input id="firstName" value={personalInfos.lastName} onChange={(e) => setPersonalInfos({ ...personalInfos, lastName: e.target.value })} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label for="firstName">
                                            MiddleName<span className="important">*</span>
                                        </Label>
                                        <Input id="firstName" value={personalInfos.middleName} onChange={(e) => setPersonalInfos({ ...personalInfos, middleName: e.target.value })} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label for='email'>Email<span className="important">*</span></Label>
                                        <Input id="email" value={personalInfos.email} onChange={(e) => setPersonalInfos({ ...personalInfos, email: e.target.value })} />
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label for='tel'>Phone Number<span className="important">*</span></Label>
                                        <Input id="tel" value={personalInfos.telephone} onChange={(e) => setPersonalInfos({ ...personalInfos, telephone: e.target.value })} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
                <div className="btn__wrapper">
                    <div className="text-end">
                        <Button className="next__btn" onClick={handleNextCLicked}>Continue</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepOne