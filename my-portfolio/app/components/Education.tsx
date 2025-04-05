export default function Education() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <div className="row">
          <div className="col-md-4" data-aos="fade-up">
            <div className="education-card text-center">
              <h5>Brainware University</h5>
              <p className="degree">MTech, AI & ML</p>
              <p className="timeline">Aug 2022 - Jul 2024</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="education-card text-center">
              <h5>Elitte College of Engineering</h5>
              <p className="degree">BTech, CSE</p>
              <p className="timeline">Aug 2019 - Jun 2022</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="education-card text-center">
              <h5>Elitte Institute of Engineering</h5>
              <p className="degree">Diploma, CSE</p>
              <p className="timeline">2016 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
