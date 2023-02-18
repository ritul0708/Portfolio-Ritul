import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon' ></i>
        <h3 className="about_title">Experience</h3>
        <spna className="about__subtitle">1.5 Years Working</spna>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about_title">Completed</h3>
        <spna className="about__subtitle">4Projects</spna>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about_title">Support</h3>
        <spna className="about__subtitle">Online</spna>
      </div>
    </div>
  )
}

export default Info