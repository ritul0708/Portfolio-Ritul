import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">HTML</h3>
              <span className="skill__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">CSS</h3>
              <span className="skill__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">JavaScript</h3>
              <span className="skill__level">Intermidiate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">ReactJS</h3>
              <span className="skill__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">Material UI</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skill__name">Tailwind CSS</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend