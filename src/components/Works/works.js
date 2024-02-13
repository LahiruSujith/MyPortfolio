import React from 'react';
import './works.css';
import portfolio1 from '../../assets/outputCal2.png'
import portfolio2 from '../../assets/Output1.jpg'
import portfolio3 from '../../assets/Output3.png'
import portfolio4 from '../../assets/Output4.png'
import portfolio5 from '../../assets/Output5.png'
import { Link } from 'react-scroll';
import gitImg from '../../assets/github.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc"></span>
        <div className="worksBars">
          <div className="worksBar">
            <img src={portfolio1} alt="" className="worksImg" />
            <div className="worksBarText">
              <h2>Java Calculator</h2>
              <p>Create Simple Calculator using Java Swing.</p>
              <Link> <button className="btn"><img src={gitImg} alt="github profile" className='btnImg'/>GitHub</button></Link>
            </div>
            </div>
            <div className="worksBar">
            <img src={portfolio2} alt="" className="worksImg" />
            <div className="worksBarText">
              <h2>JavaScript Calculator</h2>
              <p>create simple calculator using Html , Css, JavaScript.</p>
              <Link> <button className="btn"><img src={gitImg} alt="github profile" className='btnImg'/>GitHub</button></Link>
            </div>
            </div>
            <div className="worksBar">
            <img src={portfolio3} alt="" className="worksImg" />
            <div className="worksBarText">
              <h2>Time-Date Diget</h2>
              <p>Display Current date and time.
                using html, Css, JavaScript.
              </p>
              <Link> <button className="btn"><img src={gitImg} alt="github profile" className='btnImg'/>GitHub</button></Link>
            </div>
            </div>
            <div className="worksBar">
            <img src={portfolio4} alt="" className="worksImg" />
            <div className="worksBarText">
              <h2>Employee Crud</h2>
              <p>create simple Crud Application for Sasindu Products.
                <br />Using html, css, JavaScript, Php and MySQL.
              </p>
              <Link> <button className="btn"><img src={gitImg} alt="github profile" className='btnImg'/>GitHub</button></Link>
            </div>
            </div>
            <div className="worksBar">
            <img src={portfolio5} alt="" className="worksImg" />
            <div className="worksBargithub profile">
              <h2>Student Crud App</h2>
              <p>Create Simple Crud Application.
                <br />using ReactJS.
              </p>
              <Link> <button className="btn"><img src={gitImg} alt="github profile" className='btnImg'/>GitHub</button></Link>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Works