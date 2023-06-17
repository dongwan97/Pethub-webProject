import React, { useEffect, useRef } from 'react';
import './PageInfo2.css'
import image3 from '../assets/3.png'


function PageInfo4() {
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.7, // Trigger the callback when the section is 70% visible
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
    observer.observe(imageRef.current);

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="home-main-section2" ref={sectionRef}>
      
      <div className="section3-description" ref={descriptionRef} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }}>

        <div>
          <h1>동물병원</h1>
          <h2>근처의 동물병원을 <br/> 미리 알아두세요</h2>
        </div>
        <div>
          <p>주위의 동물병원을 <br/> 한 눈에 보이는 지도로 알아보세요!</p>
        </div>

      </div>

      <div className="section3-image">
        <div className='third-image'><img ref={imageRef} src={image3} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 1s, transform 1s' }} /></div>
      </div>
      
    </div>
    

  )
}
export default PageInfo4;