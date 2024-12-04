import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by  Kishor G</h4>
      <h4>Copyright &copy; 2024 JS</h4>
      <div className='footerLinks'>
        <a href="www.linkedin.com/in/kishor-g-207617323" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:kishor1832004@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer