const MobileBottomNav = ({ hours, minutes, ampm }) => {
  return (
    <nav 
      className="fixed bottom-0 left-0 w-full z-50 mobile:block tablet:hidden bg-[#F2F0EF]/95 backdrop-blur-lg py-4"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="flex justify-between items-center w-full px-4 overflow-hidden">
        <div className="text-center flex-shrink-0" role="status" aria-label="Current time and location">
          <p className="text-sm font-bold" aria-live="polite">
            <time dateTime={`${hours}:${minutes} ${ampm}`}>
              {hours}<span className="blink-colon">:</span>{minutes} {ampm}
            </time>
          </p>
          <p className="text-xs">LOCATION</p>
          <p className="font-bold whitespace-nowrap text-xs">AUSTIN, TX</p>
        </div>
        
        <div className="flex gap-4 min-w-[60%] justify-end" role="menubar">
          {["about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover-link text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1 py-1"
              role="menuitem"
              aria-label={`Navigate to ${link} section`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                  element.focus();
                }
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
    </nav>
  );
};

export default MobileBottomNav;