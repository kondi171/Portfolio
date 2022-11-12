import { useEffect, useState } from "react";

const Progress = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  const countProgressMax = () => {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
    setPageHeight(height - window.innerHeight);
  }
  window.addEventListener('scroll', () => {
    const settings = document.getElementById('settings');
    settings.classList.remove('visible');
    setCurrentScroll(window.scrollY);
  });
  window.addEventListener('resize', () => {
    countProgressMax();
  })
  useEffect(() => {
    countProgressMax();
  }, []);

  return (
    <progress className="progress-bar" value={currentScroll} max={pageHeight}></progress>
  );
}
export default Progress;