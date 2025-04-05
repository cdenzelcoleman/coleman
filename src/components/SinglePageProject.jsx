import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import gsap from "gsap";
import projectsData from "../utils/data";
import Available from "./Available";
import ScrollToTop from "../hooks/ScrollToTop";
import LiquidCursor from "./LiquidCursor";
import "../animations/hover-animation.css";
import "../css/loader.css";

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const isMobile = () => window.innerWidth <= 768;

const SinglePageProject = () => {
  ScrollToTop();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { name } = useParams();
  const project = projectsData.find((p) => p.name === decodeURIComponent(name));

  // Parallax configuration
  const parallaxConfig = isMobile()
    ? {
        firstName: { translateX: [-20, -10], speed: 10 },
        lastName: { translateX: [20, -10], speed: 5 },
        imageProject: { translateX: [20, -10], speed: 5},
      }
    : {
        firstName: { translateX: [-50, 20], speed: 10 },
        lastName: { translateX: [30, -20], speed: 10 },
        imageProject: { speed: 10 },
      };

  const { ref: firstName } = useParallax(parallaxConfig.firstName);
  const { ref: lastName } = useParallax(parallaxConfig.lastName);
  const { ref: imageProject } = useParallax(parallaxConfig.imageProject);

  useEffect(() => {
    if (project) {
      preloadImages(project.gridImages);
      const timer = setTimeout(() => setImagesLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [project]);

  useEffect(() => {
    gsap.to(".img-container", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
      ease: "power4.inOut",
      stagger: { amount: 1.5 },
      duration: 2,
    });

    gsap.to(".loader", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      delay: 2,
      duration: 2,
    });
  }, []);

  if (!project) return <p className="p-8 text-center">Project not found</p>;

  return (
    <div className="w-full bg-bg-color text-font-color overflow-hidden relative">
      <LiquidCursor />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        {/* Project Header */}
        <header className="mb-16 md:mb-24 text-center">
          <div className="font-clash-grotesk font-bold uppercase tracking-tighter">
            <h1
              ref={firstName}
              className="tablet:text-10xl mobile:text-7xl tablet:-mt-5 mobile:mt-10 pt-20"
            >
              {project.firstname}
            </h1>
            <h1
              ref={lastName}
              className="text-7xl md:text-8xl lg:text-10xl md:-mt-20 lg:-mt-28 md:ml-48 lg:ml-64"
            >
              {project.lastname}
            </h1>
          </div>
          
          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {project.keywords.map((keyword, i) => (
              <span
                key={i}
                className="flex flex-wrap justify-center gap-4"
              >
                {keyword}
              </span>
            ))}
          </div>
        </header>

        {/* Project Overview Section */}
        <section
          ref={imageProject}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 md:mb-32"
        >
          <div className="lg:col-span-1 lg:text-right">
            <p className="text-lg leading-relaxed text-opacity-80">
              {project.details}
            </p>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <p className="text-xl leading-relaxed text-opacity-90">
              {project.description}
            </p>
            <div className="overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src={project.hero}
                alt="Project hero"
                className="w-full h-auto object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>

        {/* Project Metadata */}
        <section className="mb-20 md:mb-32 flex flex-col items-center">
          
          <div className="text-center space-y-6">
            <h2 className="italic text-5xl md:text-7xl opacity-75">
              ({project.year})
            </h2>
            <ul className="flex flex-wrap justify-center gap-4">
              {project.skills.map((skill, i) => (
                <li
                  key={i}
                  className="font-urbanist font-bold uppercase text-sm md:text-lg px-4 py-2 bg-bg-accent rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {project.gridImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </section>

        {/* Live Demo CTA */}
        {project.liveDemo && (
          <section className="mb-20 text-center">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link inline-block text-xl md:text-2xl font-medium px-8 py-4 rounded-full bg-bg-accent hover:bg-opacity-80 transition-colors duration-300"
            >
              <span className="relative overflow-hidden">
                <span className="block">View Live Demo</span>
                <span className="block absolute inset-0">View Live Demo</span>
              </span>
            </a>
          </section>
        )}

        <Available project={project} />
      </main>

      {/* Preloader Animation */}
      <div className="loader">
        {project.gridImages.map((image, index) => (
          <div className="img-container" key={index}>
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="img-container">
          <img
            src={project.hero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePageProject;