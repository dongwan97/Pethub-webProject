import React, { useEffect, useRef } from 'react';
import './PageInfo2.css';
import image4 from '../assets/4.png';

function LandingPageQuestionComp() {
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.7, // Trigger the callback when each section is 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.style.opacity = 1; // Fade in the element
          target.style.transform = 'translateY(0)'; // Reset translateY transformation

          observer.unobserve(target); // Stop observing the element once it's visible
        }
      });
    }, options);

    observer.observe(descriptionRef.current);

    imageRefs.current.forEach((imageRef) => {
      observer.observe(imageRef);
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-main-section3" ref={sectionRef}>
      <div className="section1-description" ref={descriptionRef} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }}>
        <h1>질문게시판</h1>
        <h2>자주 묻는 질문,<br/>답변을 한눈에</h2>
        <p>평소 궁금했던 질문들에 대해<br/>답변을 확인해보세요!</p>
      </div>

      <div className="section2-image">
        <div className='first-image-2'><img ref={(el) => (imageRefs.current[0] = el)} src={image4} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }} /></div>
      </div>
    </div>
  );
}

export default LandingPageQuestionComp;