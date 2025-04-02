import React from "react";
import contactAbstract from "./assets/abstract-contact.svg";
import "./css/contact.css";

const Contact = () => {
  return (
    <div className="tablet:w-full tablet:pb-5 mt-40" id="contact">
      <div className="absolute tablet:-mt-40 mobile:-mt-12">
        <img src={contactAbstract} alt="abstract" className="mobile:w-28 tablet:w-auto" />
      </div>
      <div className="flex justify-center items-center main-container w-full grow p-5">
        <div className="pt-5 pl-5 pr-5 rounded-3xl bg-font-color uppercase flex flex-col justify-between grow w-full">
          <div className="flex flex-col tablet:items-end mobile:text-7xl mobile:items-start mobile:ml-0 tablet:ml-0 grow">
            <h1 className="tablet:text-11xl desktop:text-14xl font-clash-grotesk text-bg-color uppercase tablet:-mt-9 w-full flex justify-center">
              contact
            </h1>
            <p className="text-bg-color tablet:-mt-7 tablet:w-2/6 mobile:w-80 tablet:text-right tablet:text-lg mobile:text-sm">
              Let's Connect! Reach out and let the conversation begin.
            </p>
          </div>
          <div className="text-bg-color flex tablet:flex-row mobile:flex-col tablet:items-end tablet:justify-between pt-20 font-urbanist font-bold text-lg -mb-3">
            <div className="flex tablet:items-end mobile:flex-col tablet:flex-row">
              <div>
                <ul className="list-none">
                  <li className="-mt-5">
                    <a href="https://www.instagram.com/cdenzelcoleman" className="hover-link" target="_blank">
                      <span>
                        <span>instagram</span>
                        <span>instagram</span>
                      </span>
                    </a>
                  </li>
                  <li className="-mt-5">
                    <a href="https://www.linkedin.com/in/camerondenzelcoleman" className="hover-link" target="_blank">
                      <span>
                        <span>linkedin</span>
                        <span>linkedin</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tablet:ml-20">
                <ul>
                  <li>
                    <a
                      href="/pdf/Cameron_Coleman_Full_Stack_Resume.pdf"
                      download="Cameron_Coleman_Full_Stack_Resume"
                      className="hover-link"
                      target="_blank"
                    >
                      <span>
                        <span>resume</span>
                        <span>resume</span>
                      </span>
                    </a>
                  </li>
                  <li className="-mt-5">
                    <a href="tel:+15123174414" className="hover-link" target="_blank">
                      <span>
                        <span>+1 512-317-4414</span>
                        <span>+1 512-317-4414</span>
                      </span>
                    </a>
                  </li>
                  <li className="-mt-5">
                    <a href="mailto:camdenzelcoleman@gmail.com" className="hover-link" target="_blank">
                      <span>
                        <span>camdenzelcoleman@gmail.com</span>
                        <span>camdenzelcoleman@gmail.com</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mb-5">© all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
