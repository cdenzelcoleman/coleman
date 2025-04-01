import React, { useState, useEffect } from "react";

const TypeJobTitles = ({
  titles = [],
  typingSpeed = 50, // milliseconds per character
  deletingSpeed = 10,
  pauseTime = 300,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timer;

    if (!isDeleting) {
      // add one letter at a time
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // remove one letter at a time
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // move to the next title and switch back to typing
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentTitleIndex,
    titles,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return <span>{displayedText}</span>;
};

export default TypeJobTitles;
