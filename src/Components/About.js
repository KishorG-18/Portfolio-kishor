// import React from 'react';
// import Skills from './Skills.js';
// import Tilt from 'react-parallax-tilt';
// import Lottie from "lottie-react"
// import Coder from '../LottieFiles/coder.json';


// const About = () => {
//   return (
//     <>
//       <div className='AboutPage'>
//         <div className='AboutText'>
//           <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
//           <p>
//             Hi, my name is <b> Bewin Felix</b> and I am from Tamil Nadu, India.
//             I'm a <b>Full Stack Web Developer </b> and a final year college student pursuing <b>B.Tech Computer Science and Engineering</b>. <br/><br/>
//             I have done an internship as a <b>Web Developer </b> in Karunya Institute of Technology and Sciences.
//             I love to lead my team to create original projects with beautiful design, you can check out some of my work in the projects section.<br/><br/>

//             I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
//             Apart from Development I love Gaming, you can check out me here <a href="https://www.linkedin.com/in/bewin-felix-4153a9232" target='_blank'>Linkedin.</a>
//           </p>
//         </div>


//         <div>
//           <Tilt>
//               <Lottie 
//               className="illustration" 
//               animationData={Coder} 
//               loop={true} 
//             />
//           </Tilt>
//         </div>

//       </div>
      
//       <h1 className='SkillsHeading'>Professional Skillset</h1>
//       <div className='skills'>
//         <Skills skill='Python' />
//         <Skills skill='Javascript' />
//         <Skills skill='Angular' />
//         <Skills skill='React' />
//         <Skills skill='Electron' />
//         <Skills skill='ReactNative' />
//         <Skills skill='Django'/>
//         <Skills skill='Node' />
//         <Skills skill='Html5' />
//         <Skills skill='Css' />
//         <Skills skill='Express' />
//         <Skills skill='MongoDb' />
//         <Skills skill='SQL' />
//         <Skills skill='Git' />
//         <Skills skill='Ngnix' />
//         <Skills skill='Docker' />
//         <Skills skill='Postman' />
        
//         {/* <Skills skill='Figma' /> */}
//         {/* <Skills skill='Vercel' /> */}
//         <Skills skill='Npm' />
//         <Skills skill='aws'/>
        
//       </div>
//     </>
//   )
// }

// export default About




import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b> Kishor G</b> and I am from Tamil Nadu, India.
            I'm a <b>Web Developer </b> and a final year college student pursuing <b>B.Tech Computer Science and Engineering</b>. <br/><br/>
            I have done internships in prestigious organizations, including Karunya Institute of Technology and Sciences and other Online Web Interns. These experiences have allowed me to develop real-world skills and expertise in web development and Python programming. <br/><br/>
            These experiences have honed my problem-solving abilities and collaboration skills in high-pressure environments.<br/><br/>
            I love to lead my team to create original projects with beautiful design, you can check out some of my work in the projects section.<br/><br/>

            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from Development I love Gaming, you can check out me here <a href="www.linkedin.com/in/kishor-g-207617323" target='_blank'>Linkedin.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Python' />
        <Skills skill='Javascript' />
        <Skills skill='Angular' />
        <Skills skill='Web Design' />
        <Skills skill='Node' />
        <Skills skill='C' />
        <Skills skill='Css' />
        <Skills skill='Web Development' />
        <Skills skill='MongoDb' />
      </div>
    </>
  )
}

export default About;
