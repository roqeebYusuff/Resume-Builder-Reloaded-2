import {atom} from 'recoil'

export const currentPageState = atom({
    key: 'currentPageState',
    default: 1
})

export const personalInfoList = atom({
    key: 'personalInfoList',
    default: {
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        telephone: ''
    }
})

export const educationList = atom({
    key: 'educationList',
    default: []
})

export const experienceList = atom({
    key: 'experienceList',
    default: []
})

export const projectList = atom({
    key: 'projectList',
    default: []
})

export const skillList = atom({
    key: 'skillList',
    default: []
})

export const socialLinksList = atom({
    key: 'socialLinksList',
    default: {
        website: '',
        github: '',
        linkedin: '',
        twitter: '',
    }
})