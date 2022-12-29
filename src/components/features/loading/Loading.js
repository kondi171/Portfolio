import './_loading.scss';
import { useEffect, useState, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { AppContext } from '../../flow/AppContext';

const Loading = () => {
  const { language, theme, isThemeChanged } = useContext(AppContext);
  const outerRing = useSpring({
    loop: true,
    config: {
      duration: 600,
    },
    from: {
      scale: 0,
    },
    scale: .9,
  });

  const middleRing = useSpring({
    loop: true,
    config: {
      duration: 400,
    },
    from: {
      rotate: 0,
      // scale: 0
    },
    rotate: -360,
    // scale: 0.6
  });

  const innerRing = useSpring({
    loop: true,
    config: {
      duration: 400,
    },
    from: {
      rotate: 0,

    },
    rotate: 360,

    // delay: 100,
  });

  const [dots, setDots] = useState('');
  useEffect(() => {
    const loadingSpinnerOne = document.querySelector('.loading__spinner--one');
    const loadingSpinnerTwo = document.querySelector('.loading__spinner--two');
    const loadingSpinnerThree = document.querySelector('.loading__spinner--three');
    const loadingText = document.querySelector('.loading__text');
    if (isThemeChanged) {
      loadingSpinnerOne.dataset.theme = 'Lambda';
      loadingSpinnerTwo.dataset.theme = 'Lambda';
      loadingSpinnerThree.dataset.theme = 'Lambda';
      loadingText.dataset.theme = 'Lambda';
    } else {
      loadingSpinnerOne.dataset.theme = theme;
      loadingSpinnerTwo.dataset.theme = theme;
      loadingSpinnerThree.dataset.theme = theme;
      loadingText.dataset.theme = theme;
    }
  }, [theme]);
  useEffect(() => {
    const dotsTimeout = setTimeout(() => {
      if (dots.length === 3) setDots('');
      else setDots(dots + '.');
    }, 200);
    return () => {
      clearTimeout(dotsTimeout);
    }
  }, [dots]);

  return (
    <div className='loading'>
      <animated.div className='loading__spinner--one' style={outerRing}></animated.div>
      <animated.div className='loading__spinner--two' style={middleRing}></animated.div>
      <animated.div className='loading__spinner--three' style={innerRing}></animated.div>
      <div className='loading__text'>{language ? 'Wczytywanie danych' : 'Data loading'}<span>{dots}</span></div>
    </div>
  );
};

export default Loading;
