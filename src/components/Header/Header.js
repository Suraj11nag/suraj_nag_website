import "./header.css"
import myImage from "../../images/Suraj.jpg"

function Header() {
  return (
    <div className="header section_padding" id='home'>

      <div className="header-image">
        <img src={myImage} />
      </div>
      <div className="header-content">
        <h1 className="gradient__text">Hi, I'm Suraj Nag</h1>
        <p>I'm an India-based data scientist and analyst with a goal-driven creative mindset and a passion for learning and innovating.
        <br />
        <br />
        Currently working as a Data Analyst at Open Financial.</p>
      </div>
    </div>
  )
}

export default Header;