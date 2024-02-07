import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
     <section id="intro">
         <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Lahiru Sujith</span><br /> Website Designer</span>
            <p className="introPara">I am undergraduate student of University of vavuniya.
                I'm well-versed in Programming Languages, Technologies and continuously stay abreast of industry trends.
                Becoming skilled in Software Development, and I'm already 1+ year deep in crafting solutions with React.js, 
                Node.js, Springboot, mySQL, PHP, Laravel, and JavaScript,
             </p>
            <Link> <button className="btn"><img src={btnImg} alt="hire me" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={ bg } alt="profile" className="bg" />      
     </section>
  )
}

export default Intro