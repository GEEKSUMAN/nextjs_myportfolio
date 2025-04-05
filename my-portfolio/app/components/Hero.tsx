export default function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="container">
        <img
          src="images/profile-picture.jpg"
          alt="Profile Picture"
          className="profile-img"
        />
        <h1>Suman Maji</h1>
        <p className="lead">Backend Developer | Game Development Specialist</p>
        <p>
          Expert in scalable backend systems, real-time multiplayer games,
          blockchain, and AI/ML integrations.
        </p>
        <a href="#contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </section>
  );
}
