import React, { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import AnimatedPage from './AnimatedPage'
import { projectList } from '../utils/atom'
import { useRecoilState } from 'recoil'
import { FiTrash2 } from 'react-icons/fi'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { FcPlanner, FcOvertime, FcDepartment, FcGraduationCap, FcBusinessman, FcNook, FcBriefcase, FcEmptyTrash } from 'react-icons/fc'

const StepFour = ({ nextStep, prevStep }) => {
    const [projects, setProjects] = useRecoilState(projectList)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')

    const addNewProject = () => {
        if (title !== '' && link !== '' && description !== '') {
            setProjects((projects) => [...projects, { title, link, description }]);
            setTitle('')
            setLink('')
            setDescription('')
        }
        else {
            Notify.failure('Required fields cannot be empty', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }

    const removeProject = (index) => {
        setProjects((projects) => projects.filter((_, i) => i !== index))
    }

    const handleNextClicked = () => {
        if (projects.length > 0) {
            nextStep()
        }
        else {
            Notify.failure('Projects is not set', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }
    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Projects</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <Col md='4' key={index}>
                                        <div className="elem p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="m-0">Project {index + 1}</h4>
                                                <FiTrash2 size={18} color='red' style={{ cursor: 'pointer' }} onClick={() => removeProject(index)} />
                                            </div>
                                            <div className="singl__elem"><FcDepartment size={15} /> <span>{project.title}</span> </div>
                                            <div className="singl__elem"><FcBusinessman size={15} /> <span>{project.link}</span></div>
                                            <div className="singl__elem"><FcNook size={15} /> <span>{project.description}</span></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Form>
                        <div className="single__element border-b">
                            <Row>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Title<span className="important">*</span></Label>
                                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Link<span className="important">*</span></Label>
                                        <Input value={link} onChange={(e) => setLink(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Description<span className="important">*</span></Label>
                                        <Input type='textarea' value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        <div className="text-end">
                            <Button className="add__element__btn" onClick={addNewProject}>Add Project</Button>
                        </div>
                    </Form>
                </div>

                <div className="btn__wrapper">
                    <div className="d-flex justify-content-between">
                        <Button className="prev__btn" onClick={prevStep}>Back</Button>
                        <Button className="next__btn" onClick={handleNextClicked}>Continue</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepFour