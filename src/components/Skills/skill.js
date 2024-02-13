import React from 'react';
import './skill.css';
import backend from '../../assets/Frontend.jpg';
import fullstack from '../../assets/Backend.jpg';
import testing from '../../assets/Testing.jpg';


const Skill = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am well-versed in Programming Languages, Technologies and continuously stay abreast of industry trends. Becoming skilled in Software Development, and I'm already 1+ year deep in crafting solutions with React.js, Node.js, Springboot, mySQL, PHP, Laravel, and JavaScript,

        <br/>I'm obsessed with modern technologies, constantly researching and experimenting to stay ahead of the curve. This year, my focus is on Server-side languages like Django, and Springboot. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ backend } alt="Front end Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Back End Developing</h2>
                    <p>Backend developer proficient in nodeJS, Laravel and Springboot. Experienced in building dynamic, responsive web applications with React and Angular. Passionate about design and committed to delivering exceptional user experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={ fullstack } alt="Back end Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>FullStack Developing</h2>
                    <p>I am a skilled backend developer proficient in HTML, CSS, and JavaScript, with expertise in PHP Laravel, Node.js, and Spring Boot. Leveraging my backend knowledge, I enhance frontend experiences to create seamless web applications with a focus on robustness and scalability.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={ testing } alt="Quality Testing" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Quality Testing</h2>
                    <p>Experienced in Quality Testing with expertise in JavaScript, PHP Laravel, Node.js, and Spring Boot Java. Strong grasp of software quality assurance principles, ensuring high-quality product delivery through rigorous testing and attention to detail. Dedicated to continuous learning and staying updated on latest technologies and best practices in software development and quality assurance.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skill