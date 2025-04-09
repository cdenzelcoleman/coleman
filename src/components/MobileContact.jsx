import React from "react";

const MobileContact = () => {
  return (
    <div className="mobile:block tablet:hidden fixed bottom-0 w-full bg-[#4545ee] text-white p-4">
      <div className="flex justify-around items-center">
        <a href="#about" className="text-sm">About</a>
        <a href="#projects" className="text-sm">Projects</a>
        <a href="#contact" className="text-sm">Contact</a>
      </div>
    </div>
  );
};

export default MobileContact;