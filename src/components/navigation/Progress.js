import { useEffect } from "react";

const Progress = ({ pageHeight, setPageHeight, currentScroll, setCurrentScroll }) => {


  const countProgressMax = () => {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
    setPageHeight(height - window.innerHeight);
  }

  const settingsVisibility = () => {
    const settings = document.getElementById('settings');
    settings.classList.remove('visible');
    setCurrentScroll(window.scrollY);
    countProgressMax();
  }

  useEffect(() => {
    countProgressMax();
    window.addEventListener('scroll', settingsVisibility);
    window.addEventListener('resize', countProgressMax);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', settingsVisibility);
      window.removeEventListener('scroll', countProgressMax);
    }
  }, []);

  return (
    <progress className="progress-bar" value={currentScroll} max={pageHeight}></progress>
  );
}
export default Progress;