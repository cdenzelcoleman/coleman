import "./css/contact.css";

const Contact = () => {
  return (
    <div className="tablet:w-full tablet:pb-5 mobile:mt-20 tablet:mt-40" id="contact">
      <div className="absolute tablet:-mt-40 mobile:-mt-8">
      </div>
      <div className="flex justify-center items-center main-container w-full grow mobile:p-3 tablet:p-5">
        <div className="mobile:pt-3 mobile:pl-3 mobile:pr-3 mobile:pb-6 tablet:pt-5 tablet:pl-5 tablet:pr-5 rounded-3xl bg-font-color uppercase flex flex-col justify-between grow w-full">
          <div className="flex flex-col tablet:items-end mobile:items-start mobile:ml-0 tablet:ml-0 grow">
            <h1 className="mobile:text-6xl tablet:text-11xl desktop:text-14xl font-clash-grotesk text-bg-color uppercase tablet:-mt-9 mobile:-mt-4 w-full mobile:text-left tablet:text-center">
              contact
            </h1>
            <p className="text-bg-color tablet:-mt-7 tablet:w-2/6 mobile:w-full mobile:max-w-md tablet:text-right mobile:text-left tablet:text-lg mobile:text-sm mobile:mt-4">
              Let&apos;s Connect! Reach out and let the conversation begin.
            </p>
          </div>
          <div className="text-bg-color flex tablet:flex-row mobile:flex-col tablet:items-end tablet:justify-between mobile:pt-10 tablet:pt-20 font-urbanist font-bold text-lg mobile:-mb-1 tablet:-mb-3">
            <div className="flex tablet:items-end mobile:flex-col tablet:flex-row mobile:gap-6 tablet:gap-0">
              <div>
                <ul className="list-none mobile:space-y-2 tablet:space-y-0">
                  <li className="tablet:-mt-5 mobile:mt-0">
                    <a href="https://github.com/cdenzelcoleman" className="hover-link mobile:text-base tablet:text-lg" target="_blank" rel="noopener noreferrer">
                      <span>
                        <span>github</span>
                        <span>github</span>
                      </span>
                    </a>
                  </li>
                  <li className="tablet:-mt-5 mobile:mt-0">
                    <a href="https://www.instagram.com/cdenzelcoleman" className="hover-link mobile:text-base tablet:text-lg" target="_blank" rel="noopener noreferrer">
                      <span>
                        <span>instagram</span>
                        <span>instagram</span>
                      </span>
                    </a>
                  </li>
                  <li className="tablet:-mt-5 mobile:mt-0">
                    <a href="https://www.linkedin.com/in/camerondenzelcoleman" className="hover-link mobile:text-base tablet:text-lg" target="_blank" rel="noopener noreferrer">
                      <span>
                        <span>linkedin</span>
                        <span>linkedin</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tablet:ml-20 mobile:ml-0">
                <ul className="mobile:space-y-2 tablet:space-y-0">
                <li className="tablet:-mt-5 mobile:mt-0">
                <a href={`${import.meta.env.BASE_URL}pdf/CameronColemanFullStackResume.pdf`} download className="hover-link mobile:text-base tablet:text-lg">
    <span>
      <span>Resume</span>
      <span>Resume</span>
    </span>
  </a>
</li>
                  <li className="tablet:-mt-5 mobile:mt-0">
                    <a href="tel:+15123174414" className="hover-link mobile:text-base tablet:text-lg" target="_blank" rel="noopener noreferrer">
                      <span>
                        <span>+1 512-317-4414</span>
                        <span>+1 512-317-4414</span>
                      </span>
                    </a>
                  </li>
                  <li className="tablet:-mt-5 mobile:mt-0">
                    <a href="mailto:camdenzelcoleman@gmail.com" className="hover-link mobile:text-base tablet:text-lg mobile:break-all" target="_blank" rel="noopener noreferrer">
                      <span>
                        <span>camdenzelcoleman@gmail.com</span>
                        <span>camdenzelcoleman@gmail.com</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mobile:mb-3 mobile:mt-6 tablet:mb-5 tablet:mt-0">© all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;