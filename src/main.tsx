import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Scroll and load animations run only with JS and when the visitor allows motion
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.documentElement.classList.add("motion");
}

createRoot(document.getElementById("root")!).render(<App />);
