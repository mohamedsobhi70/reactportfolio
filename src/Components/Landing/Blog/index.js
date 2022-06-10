import "./style.css";
function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="section-title padding-15">
            <h2>Recently Added</h2>
          </div>
        </div>
        <div className="row">
          <div className="blog-item padding-15">
            <div className="blog-item-inner shadow-dark">
              <div className="blog-img">
                <img src="images/greeny.png" alt="pic1" />
                <div className="blog-date">1 Oct 2020</div>
              </div>
              <div className="blog-info">
                <h4 className="blog-title">Frontend</h4>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  quia itaque voluptatem ea at voluptates, fugiat aperiam atque
                  illum iusto.
                </p>
                <p className="blog-tags">
                  section :<a href="#">HTML</a> ,<a href="#"> CSS</a>
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item padding-15">
            <div className="blog-item-inner shadow-dark">
              <div className="blog-img">
                <img src="images/yallakora-min.webp" alt="pic1" />
                <div className="blog-date">1 oct 2020</div>
              </div>
              <div className="blog-info">
                <h4 className="blog-title"> New in CSS</h4>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  quia itaque voluptatem ea at voluptates, fugiat aperiam atque
                  illum iusto.
                </p>
                <p className="blog-tags">
                  Section :<a href="#">Bootstrap</a> ,<a href="#"> CSS</a>
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item padding-15">
            <div className="blog-item-inner shadow-dark">
              <div className="blog-img">
                <img src="images/tripalong.png" alt="pic1" />
                <div className="blog-date">1 oct 2020</div>
              </div>
              <div className="blog-info">
                <h4 className="blog-title">Ecommerce</h4>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  quia itaque voluptatem ea at voluptates, fugiat aperiam atque
                  illum iusto.
                </p>
                <p className="blog-tags">
                  Section :<a href="#">JavaScript</a> ,<a href="#"> JQuery</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
