import "./style.css";
function Home() {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="intro">
          <img className="shadow-dark" src="images/me.jpg" alt="My Picture" />
          <h1>My Name Is Mohammed Sobhi</h1>
          <p>Hello in My Portfolio</p>
          <div className="social-links">
            <a href="#">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
