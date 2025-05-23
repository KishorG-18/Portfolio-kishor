import React from 'react';
import ProjectBox from './ProjectBox';
// import NewsletterImage from '../images/NewsletterImage.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
// import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      {/* <div className='project'>
        <ProjectBox projectName="Guided_Project_Platform" />
        <ProjectBox projectName="Attendance_System_for_KHacks" />
        <ProjectBox projectName="Sentiment_Analysis" />
        <ProjectBox projectName="Translation_of_Book_PDF" />
        <ProjectBox projectName="DNS_Filtering_Service" />
        <ProjectBox projectName="To_Do_and_Password_Manager" />
        <ProjectBox projectName="Hardware_Forensic_Suite" />
        <ProjectBox projectName="Idea_Bank" />
        <ProjectBox projectName="Workout_Tracker" />

      </div> */}
<div className='project'>
  <ProjectBox projectName="Credit_Risk_Analysis" />
  <ProjectBox projectName="Online_Shopping_Store"  />
  <ProjectBox projectName="Stoppage_of_WebAttacks"  />
  <ProjectBox projectName="Face_Reaction_Detection" />
</div>


    </div>
  )
}

export default Projects