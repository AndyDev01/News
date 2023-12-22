import React, { useRef } from "react";
import styles from "./styles.module.css";

const Slider = ({children, step = 300 }) => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - step,
      behavior: 'smooth'
    })
  }
  const scrollRight = () => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + step,
      behavior: 'smooth'
    })
  }



  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}> {'<'} </button>
        {React.cloneElement(children, {ref: sliderRef})}
      <button onClick={scrollRight} className={styles.arrow}> {'>'} </button>
    </div>
  );
};

export default Slider;
