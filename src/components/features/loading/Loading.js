import './_loading.scss';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
const Loading = () => {
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
      <div className='loading__text'>Data Loading<span>{dots}</span></div>
    </div>
  );
};

export default Loading;
