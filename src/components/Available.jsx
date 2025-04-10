import React from "react";
import "../css/contact.css";
import { Link } from "react-router-dom";
import projectsData from "../utils/data";
import ScrollToTop from "../hooks/ScrollToTop";

const Available = ({ project }) => {
  ScrollToTop();
  const currentIndex = projectsData.findIndex(
    (p) => p.name === decodeURIComponent(project.name)
  );
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="tablet:w-full tablet:pb-5 mt-40">
      <div className="flex justify-center items-center main-container w-full grow p-5">
        <div className="tablet:pt-10 tablet:pl-10 tablet:pr-10 mobile:p-6 rounded-3xl bg-font-color uppercase flex flex-col justify-between grow w-full">
          <div className="flex flex-col tablet:items-end mobile:text-6xl mobile:items-start mobile:ml-0 tablet:ml-0">
          </div>
          <div className="text-bg-color flex tablet:flex-row mobile:flex-col tablet:items-end tablet:justify-between pt-20 font-urbanist font-bold text-lg -mb-3">
            <div className="flex flex-col">
              <Link 
                to={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-link mb-5"
              >
                <span>
                  <span>View Live</span>
                  <span>View Live</span>
                </span>
              </Link>
              <Link to={`/project/${nextProject.name}`} className="next-project-button">
                <p className="hover-link">
                  <span>
                    <span>Next Project</span>
                    <span>Next Project</span>
                  </span>
                </p>
              </Link>
              <Link to={`/`} className="hover-link mt-5">
                <span>
                  <span>Home</span>
                  <span>Home</span>
                </span>
              </Link>
            </div>
            <p className="mb-5">© All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
