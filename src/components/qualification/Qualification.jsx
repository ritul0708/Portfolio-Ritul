import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index)
  }




  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
            className={
              toggleState === 1 
              ? "qualification__button button--flex qualification__active"
              : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Experience
          </div>

          <div 
            className={
              toggleState === 2
              ? "qualification__button button--flex qualification__active"
              : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
        <div 
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">EIC, B.Tech.</h3>
                <span className="qualification__subtitle">RTU, Kota</span>
                <div className='qualification__calendar'>
                  <i className="uil uil-calendar-alt"></i>
                  2017-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 

              <div>
                <h3 className="qualification__title">12th</h3>
                <span className="qualification__subtitle">Maa Bharti School</span>
                <div className='qualification__calendar'>
                  <i className="uil uil-calendar-alt"></i>
                  2015-2016
                </div>
              </div>

            </div>

          </div>

          <div 
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Project Engineer</h3>
                <span className="qualification__subtitle">Wipro</span>
                <div className='qualification__calendar'>
                  <i className="uil uil-calendar-alt"></i>
                  2021-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Qualification