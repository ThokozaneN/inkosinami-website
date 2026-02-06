import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Your local images from public/images/ folder
  // Make sure these filenames match EXACTLY what you have in your public/images/ folder
  const images = [
    "/images/absa-visit.jpeg",
    "/images/center.jpg",
    "/images/children-hero.png",
    "/images/debonairs-visit.jpg",
    "/images/mall-visit.jpeg",
    "/images/playtime.jpg",
    "/images/spur-visit.jpg",
    "/images/outdoor-activities.jpeg",
    "/images/furniture-dontations.jpeg",
    "/images/clothing-donations.jpeg",
  ];

  const getImg = (i: number) => images[i % images.length];

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Quick entry for columns
    tl.to(".preloader-col", {
      top: "0",
      duration: 1.2,
      ease: "power3.inOut"
    });

    // Staggered reveal for items (snappier)
    const itemConfig = {
      top: "0",
      duration: 1.5,
      ease: "power3.inOut"
    };

    tl.to(".c-1 .preloader-item", { ...itemConfig, stagger: 0.1 }, "-=1");
    tl.to(".c-2 .preloader-item", { ...itemConfig, stagger: -0.1 }, "-=1.4");
    tl.to(".c-3 .preloader-item", { ...itemConfig, stagger: 0.1 }, "-=1.4");
    tl.to(".c-4 .preloader-item", { ...itemConfig, stagger: -0.1 }, "-=1.4");
    tl.to(".c-5 .preloader-item", { ...itemConfig, stagger: 0.1 }, "-=1.4");

    // Title reveal happens sooner
    tl.to(".preloader-title p", {
      top: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1.2");

    // Dynamic scale-up transition
    tl.to(".preloader-container", {
      scale: 8,
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=0.6");

    // Quick fade out sequence
    tl.to(".preloader-title", {
      opacity: 0,
      duration: 0.3
    }, "-=0.8");

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "none"
    }, "-=0.4");

  }, { scope: containerRef });

  const renderColumn = (colIndex: number, className: string) => (
    <div className={`preloader-col ${className}`}>
      {[0, 1, 2, 3, 4].map((itemIndex) => (
        <div key={itemIndex} className="preloader-item">
          <img src={getImg(colIndex * 5 + itemIndex)} alt="" loading="eager" />
        </div>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="preloader-wrapper">
      <div className="preloader-container">
        {renderColumn(0, "c-1")}
        {renderColumn(1, "c-2")}
        {renderColumn(2, "c-3")}
        {renderColumn(3, "c-4")}
        {renderColumn(4, "c-5")}
      </div>

      <div className="preloader-hero">
        <div className="preloader-title">
          <p>INKOSINAMI</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
