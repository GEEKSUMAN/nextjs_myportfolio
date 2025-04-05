export default function Projects() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          My Projects
        </h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card project-card">
              <img
                src="images/ecommerce-platform.jpg"
                className="card-img-top project-img"
                alt="E-commerce Platform"
              />
              <div className="card-body">
                <h5 className="card-title">E-commerce Platform</h5>
                <p className="card-text">
                  Developed scalable e-commerce backends using Node.js, MongoDB,
                  and Socket.IO.
                </p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card project-card">
              <img
                src="images/metaverse-game-backend.jpg"
                className="card-img-top project-img"
                alt="Metaverse Game Backend"
              />
              <div className="card-body">
                <h5 className="card-title">Metaverse Game Backend</h5>
                <p className="card-text">
                  Built decentralized multiplayer game backends using Web3 and
                  Three.js.
                </p>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card project-card">
              <img
                src="images/nft-marketplace.jpg"
                className="card-img-top project-img"
                alt="NFT Marketplace"
              />
              <div className="card-body">
                <h5 className="card-title">NFT Marketplace</h5>
                <p className="card-text">
                  Developed a blockchain-based NFT marketplace on the Polygon
                  chain.
                </p>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card project-card">
              <img
                src="images/admin-panel.jpg"
                className="card-img-top project-img"
                alt="Admin Panel"
              />
              <div className="card-body">
                <h5 className="card-title">Admin Panel</h5>
                <p className="card-text">
                  Designed and developed admin panels with React.js and
                  Bootstrap.
                </p>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="card project-card">
              <img
                src="images/ai-ml-integration.jpg"
                className="card-img-top project-img"
                alt="AI/ML Integration"
              />
              <div className="card-body">
                <h5 className="card-title">AI/ML Integration</h5>
                <p className="card-text">
                  Integrated Hugging Face models and developed APIs using Python
                  Flask.
                </p>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="500">
            <div className="card project-card">
              <img
                src="images/2d-mobile-games-backend.jpg"
                className="card-img-top project-img"
                alt="2D Mobile Games Backend"
              />
              <div className="card-body">
                <h5 className="card-title">2D Mobile Games Backend</h5>
                <p className="card-text">
                  Developed backend systems for 2D mobile games with real-time
                  multiplayer support.
                </p>
              </div>
            </div>
          </div>
          {/* Project 7 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="600">
            <div className="card project-card">
              <img
                src="images/webgl-game-backend.jpg"
                className="card-img-top project-img"
                alt="WebGL Game Backend"
              />
              <div className="card-body">
                <h5 className="card-title">WebGL Game Backend</h5>
                <p className="card-text">
                  Built backend systems for WebGL-based games with
                  high-performance APIs.
                </p>
              </div>
            </div>
          </div>
          {/* Project 8 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="700">
            <div className="card project-card">
              <img
                src="images/card-games-backend.jpg"
                className="card-img-top project-img"
                alt="Card Games Backend"
              />
              <div className="card-body">
                <h5 className="card-title">Card Games Backend</h5>
                <p className="card-text">
                  Developed backend systems for multiplayer card games with
                  real-time gameplay.
                </p>
              </div>
            </div>
          </div>
          {/* Project 9 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="800">
            <div className="card project-card">
              <img
                src="images/ludo-game-backend.jpg"
                className="card-img-top project-img"
                alt="Ludo Game Backend"
              />
              <div className="card-body">
                <h5 className="card-title">Ludo Game Backend</h5>
                <p className="card-text">
                  Built backend systems for Ludo games with real-time
                  multiplayer functionality.
                </p>
              </div>
            </div>
          </div>
          {/* Project 10 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="900">
            <div className="card project-card">
              <img
                src="images/arcade-games-backend.jpg"
                className="card-img-top project-img"
                alt="Arcade Games Backend"
              />
              <div className="card-body">
                <h5 className="card-title">Arcade Games Backend</h5>
                <p className="card-text">
                  Developed backend systems for arcade games with leaderboard
                  and scoring features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
