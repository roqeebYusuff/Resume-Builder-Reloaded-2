import AnimatedPage from "./AnimatedPage"
import { useRecoilState } from 'recoil'
import { experienceList } from '../utils/atom'
import { FcPlanner, FcOvertime, FcDepartment, FcGraduationCap, FcBusinessman, FcNook, FcBriefcase, FcEmptyTrash } from 'react-icons/fc'
import { FiTrash2 } from 'react-icons/fi'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap"
import { useState } from "react"

const StepThree = ({ nextStep, prevStep }) => {
    const [experiences, setExperiences] = useRecoilState(experienceList)
    const [organisation, setOrganisation] = useState('')
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isPresent, setIsPresent] = useState(false)
    // const [present, setPresent] = useState('')

    const addNewExperience = () => {
        /* Check if all fields are set */
        if (organisation !== '' && position !== '' && description !== '' && startDate !== '' && endDate !== '') {
            setExperiences((experiences) => [...experiences, { organisation, position, description, startDate, endDate }]);
            /* Set fields to empty */
            setOrganisation('')
            setPosition('')
            setDescription('')
            setStartDate('')
            setEndDate('')
        }
        else {
            Notify.failure('Required fields cannot be empty', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    const removeElement = (index) => {
        setExperiences((experiences) => experiences.filter((_, i) => i !== index))
    }

    const handlePresent = (e) => {
        e.target.checked ? setEndDate('Present') : setEndDate('')
        setIsPresent(!isPresent)
    }

    const handleNextCLicked = () => {
        if (experiences.length > 0) {
            nextStep()
        }
        else {
            Notify.failure('Experience is not set', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Experience</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Row>
                        {
                            experiences.map((experience, index) => {
                                return (
                                    <Col md='4' key={index}>
                                        <div className="elem p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="m-0">Experience {index + 1}</h4>
                                                <FiTrash2 size={18} color='red' style={{ cursor: 'pointer' }} onClick={() => removeElement(index)} />
                                            </div>
                                            <div className="singl__elem"><FcDepartment size={15} /> <span>{experience.organisation}</span> </div>
                                            <div className="singl__elem"><FcBusinessman size={15} /> <span>{experience.position}</span></div>
                                            <div className="singl__elem"><FcNook size={15} /> <span>{experience.description}</span></div>
                                            <div className="singl__elem"><FcPlanner size={15} /> <span>{experience.startDate}</span></div>
                                            <div className="singl__elem"><FcOvertime size={15} /> <span>{experience.endDate}</span></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Form >
                        <div className="single__element border-b">
                            <Row>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label>Organisation<span className="important">*</span></Label>
                                        <Input placeholder='e.g. Google' value={organisation} onChange={(e) => setOrganisation(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label>Position<span className="important">*</span></Label>
                                        <Input placeholder='e.g. Junior Developer' value={position} onChange={(e) => setPosition(e.target.value)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Start Date<span className="important">*</span></Label>
                                        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <div className="mb-0">
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
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div className="mb-0">
                                        <Label>Description<span className="important">*</span></Label>
                                        <Input type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="text-end mt-3">
                            <Button className="add__element__btn" onClick={addNewExperience}>Add Experience</Button>
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

export default StepThree