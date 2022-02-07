import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src="https://eyetea.in/wp-content/uploads/2021/04/cropped-EyaTealogo-02-e1617680497444.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Work Experience</h1>
        <p className="a-sub">
         
        </p>
        <p className="a-desc">
          <strong>COMPANY</strong>: EyeTea Solutions<br/>
          <strong>Designation</strong>: Full Stack Developer<br />
          <strong>Date Joined</strong>: January 2020<br />
          <strong>Work Description</strong>: Work on full stack web development using ReactJs,NodeJs,HTML5/CSS3,Bootstrap,MongoDB,PostgreSQl. Creating websites for various clients according to their needs,developing REST api, backend development and writing database schemas.<br />
        </p>
     
      </div>
    </div>
  );
};

export default About;
