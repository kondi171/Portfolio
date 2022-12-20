import { useEffect, useState } from "react";

const Progress = () => {

  const [pageHeight, setPageHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  const countProgressMax = () => {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
    setPageHeight(height);
  }

  const settingsVisibility = () => {
    const settings = document.getElementById('settings');
    settings.classList.remove('visible');
    setCurrentScroll(window.scrollY);
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