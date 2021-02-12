import React, {Component} from 'react'
import HomeMe  from './HomeMe'
import ProjectItem from './ProjectItem'
import Project from './Project'
import Skills from './Skills'
import Kontakt from './Kontakt'
const Home = () => {
    
    return (
        <div>
            <HomeMe />
            <Skills />
            <Project />
            <Kontakt />
       
        </div>
    );
}
 
export default Home;