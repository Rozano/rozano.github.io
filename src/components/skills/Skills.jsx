import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <div className='skills'>
            <h2 className='header-title-dark'>Skills</h2>
            <div className='line-dark' />
            <div className='skills-container'>
                <div className='skills-list' data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1000" style={{ listStyle: 'none' }}>
                    <p>Jira</p>
                    <p>Git</p>
                    <p>Postman</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>Jenkins</p>
                    <p>DataDog</p>
                    <p>Selenium WD</p>
                    <p>LaunchDarkly</p>
                    <p>Sparkpost</p>
                    <p>CI/CD</p>
                </div>
                <div className='skills-list' data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000" style={{ listStyle: 'none' }}>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>React.js</p>
                    <p>Redux</p>
                    <p>Flask</p>
                    <p>Airflow</p>
                    <p>Docker</p>
                    <p>Unix</p>
                    <p>AWS</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>
            </div>
        </div>
    )
}
export default Skills