import "./style.css";
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padding-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-info-item padding-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>My Phone</h4>
            <p>+201550417652</p>
          </div>

          <div className="contact-info-item padding-15">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <h4>My Location</h4>
            <p> Mansoura - Egypt</p>
          </div>

          <div className="contact-info-item padding-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4> My Email</h4>
            <p>sobhi7070@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="contact-form padding-15">
            <div className="row">
              <div className="form-item col-6 padding-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="form-item col-6 padding-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padding-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padding-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Type Your Message 'please make it awesome'"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padding-15">
                <button className="btn" type="submit">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
