import "./intro.css"
import Me from "../../img/back.png"

const Intro = () => {
  return (
    <div className="i">

    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro"> Hello, My name is </h2>
        <h1 className="i-name"> Estefania </h1>

        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Student</div>
            <div className="i-title-item">Software Engineer</div>
          </div>
        </div>

        <div className="i-desc">
          I am currently a student at Tec de Monterrey
        </div>

      </div>
    </div>

    <div className="i-right">
      <div className="i-bg"> </div>
      <img src={Me} alt="" className="i-img"/>

    </div>
    </div>
  )
}

export default Intro
