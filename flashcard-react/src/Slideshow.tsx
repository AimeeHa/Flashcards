import { useEffect, useRef, useState } from 'react';
import './Slideshow.css';

interface Slide {
  title: string;
  content: string;
}
const slides: Slide[] = [
  { title: 'Slide 1', content: 'Slide 1 content' },
  { title: 'Slide 2', content: 'Slide 2 content' },
  { title: 'Slide 3', content: 'Slide 3 content' },
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number>();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map(
          ({ title, content }, index) => (
            // to see the console.log, will remove laters
            console.log('slides.map', index, title),
            (
              <div className="slide" key={index}>
                {title} <br />
                {content}
              </div>
            )
          ),
        )}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
