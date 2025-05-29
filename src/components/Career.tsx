import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EDUCATION</h4>
                <h5>KADIR HAS UNIVERSITY</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              I started to Kadir Has University.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>INTERN AT</h4>
                <h5>INFORMATIK PLM</h5>
              </div>
              <h3>2024 SUMMER</h3>
            </div>
            <p>
              I was intern at INFORMATIK PLM. I worked on PLM software and I had project on TOGG automotive.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>STUDENT</h4>
                <h5>WAITING FOR INTERNSHIP</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             For ınternship, please contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
