import React from "react";

const MobileContact = () => {
  return (
    <div className="mobile:block tablet:hidden w-full bg-font-color text-bg-color p-6" id="contact">
      <div className="flex flex-col space-y-8">
        <h1 className="text-4xl font-clash-grotesk text-center uppercase">
          CONTACT
        </h1>
        
        <p className="text-center text-lg">
          Let's Connect! Reach out and let the conversation begin.
        </p>

        <div className="flex flex-col space-y-6">
          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <a href="https://www.instagram.com/cdenzelcoleman" 
               className="hover-link text-lg"
               target="_blank"
               rel="noopener noreferrer">
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/camerondenzelcoleman" 
               className="hover-link text-lg"
               target="_blank"
               rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Resume & Contact Info */}
          <div className="flex flex-col items-center space-y-4">
          <a href={`${import.meta.env.BASE_URL}pdf/CameronColemanFullStackResume.pdf`} download className="hover-link">

              <span>Resume</span>
            </a>
            
            <a href="tel:+15123174414" className="hover-link text-lg">
              <span>+1 512-317-4414</span>
            </a>
            
            <a href="mailto:camdenzelcoleman@gmail.com" 
               className="hover-link text-lg text-center"
               target="_blank"
               rel="noopener noreferrer">
              <span>camdenzelcoleman@gmail.com</span>
            </a>
          </div>
        </div>

        <p className="text-center mt-8">© All rights reserved</p>
      </div>
    </div>
  );
};

export default MobileContact;