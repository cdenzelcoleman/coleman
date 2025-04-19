import React from 'react';

const MobileBottomNav = ({ hours, minutes, ampm }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 mobile:block tablet:hidden bg-[#F2F0EF]/95 backdrop-blur-lg py-4">
      <div className="flex justify-between items-center w-full px-4 overflow-hidden">
        <div className="text-center flex-shrink-0">
          <p className="text-sm font-bold">
            {hours}<span className="blink-colon">:</span>{minutes} {ampm}
          </p>
          <p className="text-xs">LOCATION</p>
          <p className="font-bold whitespace-nowrap text-xs">AUSTIN, TX</p>
        </div>
        
        <div className="flex gap-4 min-w-[60%] justify-end">
          {["about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover-link text-sm whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
            >
              <span>
                <span>{link.toUpperCase()}</span>
                <span>{link.toUpperCase()}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;