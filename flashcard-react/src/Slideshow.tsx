import { useEffect, useRef, useState } from 'react';
import './Slideshow.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

interface Slide {
  title: string;
  content: string;
  link: string;
  imgLink: string;
}
const slides: Slide[] = [
  {
    title: 'Slide 1',
    content: 'Slide 1 content',
    link: '/explore',
    imgLink:
      'https://i.etsystatic.com/28084276/r/il/b3aaa4/2950809301/il_1588xN.2950809301_hr8h.jpg',
  },
  {
    title: 'Slide 2',
    content: 'Slide 2 content',
    link: '/',
    imgLink:
      'https://static.vecteezy.com/system/resources/previews/009/282/197/original/black-and-white-weather-flashcards-for-kids-vector.jpg',
  },
  {
    title: 'Slide 3',
    content: 'Slide 3 content',
    link: '/',
    imgLink:
      'https://static.vecteezy.com/system/resources/previews/009/282/197/original/black-and-white-weather-flashcards-for-kids-vector.jpg',
  },
  {
    title: 'Slide 4',
    content: 'Slide 4 content',
    link: '/',
    imgLink:
      'https://static.vecteezy.com/system/resources/previews/009/282/197/original/black-and-white-weather-flashcards-for-kids-vector.jpg',
  },
  {
    title: 'Slide 5',
    content: 'Slide 5 content',
    link: '/',
    imgLink:
      'https://static.vecteezy.com/system/resources/previews/009/282/197/original/black-and-white-weather-flashcards-for-kids-vector.jpg',
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
        {slides.map(({ title, content, link, imgLink }, index) => (
          <div className="slide" key={index}>
            <div className="slide-overall">
              <div className="wordContents">
                <div className="wordContents-sub">
                  <div>{title}</div>
                  <div>{content}</div>
                  <div className="slideButton">
                    <a href={link}>See more</a>
                    <div className="slideButtonArrow">
                      <EastRoundedIcon style={{ width: '0.9em' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* testing */}
              <img
                className="imgContent"
                src={imgLink}
                alt="test"
                height="300px"
                width="400px"
              />
            </div>
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
