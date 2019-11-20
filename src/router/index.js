import Vue from 'vue'
import Router from 'vue-router'

import About from '../components/About'
import Data from '../components/Data'
import Home from '../components/Home'
import Project from '../components/Project'
import Science from '../components/Science'
import Submit from '../components/Submit'
import Team from '../components/Team'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            children: [
                {
                    path: '/project',
                    name: 'Project',
                    component: Project
                },
                {
                    path: '/science',
                    name: 'Science',
                    component: Science
                },
                {
                    path: '/Team',
                    name: 'Team',
                    component: Team
                }]
        },
        {
            path: '/submit',
            name: 'Submit',
            component: Submit
        },
        {
            path: '/data',
            name: 'Data',
            component: Data
        }
    ],
});