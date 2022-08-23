import { useState } from "react"
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap"
import AnimatedPage from "./AnimatedPage"
import { useRecoilState } from 'recoil'
import { educationList } from '../utils/atom'
import { FcPlanner, FcOvertime, FcDepartment, FcGraduationCap, FcBriefcase, FcEmptyTrash } from 'react-icons/fc'
import { FiTrash2 } from 'react-icons/fi'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

function StepTwo({ nextStep, prevStep }) {
    const [educations, setEducations] = useRecoilState(educationList)
    const [study, setStudy] = useState('')
    const [institution, setInstitution] = useState('')
    const [course, setCourse] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    // const [present, setPresent] = useState('')
    const [isPresent, setIsPresent] = useState(false)

    const addNewEducation = () => {
        /* Check if all fields are set */
        if (study !== '' && institution !== '' && course !== '' && startDate !== '' && endDate !== '') {
            setEducations((educations) => [...educations, { study, institution, course, startDate, endDate }]);
            /* Set fields to empty */
            setStudy('')
            setInstitution('')
            setCourse('')
            setStartDate('')
            setEndDate('')
        }
        else {
            Notify.failure('Required fields cannot be empty', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    const removeElement = (index) => {
        setEducations((educations) => educations.filter((_, i) => i !== index))
    }

    const handlePresent = (e) => {
        e.target.checked ? setEndDate('Present') : setEndDate('')
        setIsPresent(!isPresent)
    }

    const handleNextCLicked = () => {
        if (educations.length > 0) {
            nextStep()
        }
        else {
            Notify.failure('Education is not set', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Education</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Row>
                        {
                            educations.map((education, index) => {
                                return (
                                    <Col md='4' key={index}>
                                        <div className="elem p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="m-0">Education {index + 1}</h4>
                                                <FiTrash2 size={18} color='red' style={{ cursor: 'pointer' }} onClick={() => removeElement(index)} />
                                            </div>
                                            <div className="singl__elem"><FcGraduationCap size={15} /><span>{education.study}</span> </div>
                                            <div className="singl__elem"><FcDepartment size={15} /> <span>{education.institution}</span></div>
                                            <div className="singl__elem"><FcBriefcase size={15} /> <span>{education.course}</span></div>
                                            <div className="singl__elem"><FcPlanner size={15} /> <span>{education.startDate}</span></div>
                                            <div className="singl__elem"><FcOvertime size={15} /> <span>{education.endDate}</span></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Form >
                        <div className="single__element border-b">
                            <Row>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Degree<span className="important">*</span></Label>
                                        <Input placeholder="e.g. Bachelor of Tech" value={study} onChange={(e) => setStudy(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Institution<span className="important">*</span></Label>
                                        <Input placeholder="e.g. University of Nigeria" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Field of Study<span className="important">*</span></Label>
                                        <Input placeholder="e.g. Computer Science" value={course} onChange={(e) => setCourse(e.target.value)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label>Start Date<span className="important">*</span></Label>
                                        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup>
                                        <div className="d-flex justify-content-between">
                                            <Label>End Date<span className="important">*</span></Label>
                                            <div className="">
                                                <Input type="checkbox" onChange={handlePresent} className='mr-3' />
                                                <Label check className="ml-2">
                                                    Present
                                                </Label>
                                            </div>
                                        </div>
                                        <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} readOnly={isPresent} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        <div className="text-end">
                            <Button className="add__element__btn" onClick={addNewEducation}>Add Education</Button>
                        </div>
                    </Form>
                </div>

                <div className="btn__wrapper">
                    <div className="d-flex justify-content-between">
                        <Button className="prev__btn" onClick={prevStep}>Back</Button>
                        <Button className="next__btn" onClick={handleNextCLicked}>Continue</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepTwo