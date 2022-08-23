import React, { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { skillList } from '../utils/atom'
import { useRecoilState } from 'recoil'
import AnimatedPage from './AnimatedPage'
import { FiTrash2 } from 'react-icons/fi'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const StepFIve = ({ prevStep, nextStep }) => {
    const [skills, setSkills] = useRecoilState(skillList)
    const [skillName, setSkillName] = useState('')

    const addNewSkill = () => {
        console.log(skills)
        if (skillName === '') {
            Notify.failure('Required field cannot be empty', { clickToClose: true, timeout: 5000, cssAnimationStyle: 'zoom', showOnlyTheLastOne: true })
        }
        else {
            setSkills((skills) => [...skills, skillName])
            setSkillName('')
        }
    }

    const removeSkill = (index) => {
        setSkills((skills) => skills.filter((_, i) => i !== index))
    }

    const handleFinishCLick = () => {
        /* Check if skills list is not empty */
        if (skills.length > 0) {
            nextStep()
        }
        else {
            Notify.failure('You don\'t have any skill listed yet', { cssAnimationStyle: 'zoom', timeout: 5000, clickToClose: true, showOnlyTheLastOne: true })
        }
    }


    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Skills</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="element__wraper">
                    <Row>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <Col md='3' key={index}>
                                        <div className="elem p-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="singl__elem"><span>{skill}</span> </div>
                                                <FiTrash2 size={18} color='red' style={{ cursor: 'pointer' }} onClick={() => removeSkill(index)} />
                                            </div>
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
                                    <div>
                                        <Label>Skill<span className="important">*</span></Label>
                                        <Input value={skillName} onChange={(e) => setSkillName(e.target.value)} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-2">
                            <Button className="add__element__btn" onClick={addNewSkill}>Add Skill</Button>
                        </div>
                    </Form>
                </div>
                <div className="btn__wrapper">
                    <div className="d-flex justify-content-between">
                        <Button className="prev__btn" onClick={prevStep}>Back</Button>
                        <Button className="next__btn" onClick={handleFinishCLick}>Continue</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepFIve
