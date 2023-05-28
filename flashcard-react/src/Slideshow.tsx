import { useEffect, useRef, useState } from 'react';
import './Slideshow.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

interface Slide {
  title: string;
  content: string;
  link: string;
}
const slides: Slide[] = [
  {
    title: 'Slide 1',
    content: 'Slide 1 content',
    link: '/explore',
  },
  { title: 'Slide 2', content: 'Slide 2 content', link: '/' },
  {
    title: 'Slide 3',
    content: 'Slide 3 content',
    link: 'https://www.facebook.com',
  },
];
const delay = 3000;

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
        {slides.map(({ title, content, link }, index) => (
          <div className="slide" key={index}>
            <div className="wordContents">
              <div>{title}</div>
              <div>{content}</div>
              <div className="slideButton">
                <a href={link}>See more</a>
                <div className="slideButtonArrow">
                  <EastRoundedIcon />
                </div>
              </div>
            </div>

            {/* testing */}
            <img
              className="imgContent"
              src="https://i.etsystatic.com/28084276/r/il/b3aaa4/2950809301/il_1588xN.2950809301_hr8h.jpg"
              alt="test"
              height="300px"
              width="450px"
            />
          </div>
        ))}
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
