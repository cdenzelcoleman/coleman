import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Landing = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(".landing-title", { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <div className="landing p-8">
      <h1 className="landing-title text-4xl font-bold">
        Welcome to Cameron Coleman's Portfolio
      </h1>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Landing;
