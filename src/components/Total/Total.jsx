import React, { useState, useEffect, useRef } from "react";
import "./Total.scss";

const Total = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]); 
  const sectionRef = useRef(null); 
  const [inView, setInView] = useState(false); 

  const targets = [98, 100, 110, 33]; // Maqsadli qiymatlar

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const duration = 3000; 
      targets.forEach((target, index) => {
        const start = 0; 
        const increment = Math.ceil(target / (duration / 5)); 

        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < target) {
              newCounts[index] = Math.min(
                target,
                newCounts[index] + increment
              );
            } else {
              clearInterval(interval); 
            }
            return newCounts;
          });
        }, 30); 
      });
    }
  }, [inView]);

  return (
    <div className="total" ref={sectionRef}>
      <div className="container">
        <div className="total_flex">
          <div className="total_box">
            <h2>{counts[0]}%</h2>
            <p>Automatic payment</p>
          </div>
          <div className="total_line"></div>
          <div className="total_box">
            <h2>{counts[1].toLocaleString()}k+</h2>
            <p>New users per week</p>
          </div>
          <div className="total_line"></div>
          <div className="total_box">
            <h2>{counts[2].toLocaleString()}k+</h2>
            <p>Monthly active users</p>
          </div>
          <div className="total_line"></div>
          <div className="total_box">
            <h2>{counts[3]}%</h2>
            <p>Growth-over-year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
