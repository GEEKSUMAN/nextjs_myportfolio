export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-info text-center" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-envelope fa-2x"></i>
              <p>
                Email:{" "}
                <a href="mailto:sherspect@gmail.com">sherspect@gmail.com</a>
              </p>
            </div>
            <div className="contact-info text-center" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-phone fa-2x"></i>
              <p>
                Phone: <a href="tel:+917501660514">+91-7501660514</a>
              </p>
            </div>
            <div className="contact-info text-center" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Location: Salboni, West Bengal, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
