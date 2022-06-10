import "./style.css";
function Services() {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padding-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padding-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-laptop"></i>
              </div>
              <h4>Frontend Development</h4>
              <p>
                doing the frontend section using best brackets using HTML5 ,
                CSS3 ,JS
              </p>
            </div>
          </div>
          <div className="service-item padding-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-code"></i>
              </div>
              <h4>Descktop applications</h4>
              <p>
                i can develope descktop application with c# and SQL servr
                database
              </p>
            </div>
          </div>

          <div className="service-item padding-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-film"></i>
              </div>
              <h4>images edite</h4>
              <p>i can modify and edite on images with photoshop</p>
            </div>
          </div>

          <div className="service-item padding-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-recycle"></i>
              </div>
              <h4>SPA React Js</h4>
              <p>
                doing the frontend section using best brackets using React js ,
                react hooks , axios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
