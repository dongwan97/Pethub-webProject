import React, { useEffect, useRef } from 'react';
import './PageInfo2.css';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';

function LandingPagePetDiaryComp() {
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
    <div className="home-main-section1" ref={sectionRef}>
      <div className="section1-description" ref={descriptionRef} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }}>
        <h1>펫 다이어리</h1>
        <h2>펫과의 추억을 <br/>다이어리로</h2>
        <p>펫의 정보를 입력하고 <br/> 체크리스트를 만들어 건강관리를 시작해보세요!</p>
      </div>

      <div className="section1-image">
        <div className='first-image'><img ref={(el) => (imageRefs.current[0] = el)} src={image1} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }} /></div>
        <div className='second-image'><img ref={(el) => (imageRefs.current[1] = el)} src={image2} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }} /></div>
      </div>
    </div>
  );
}

export default LandingPagePetDiaryComp;