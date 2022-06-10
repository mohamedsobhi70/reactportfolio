import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Projects() {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    axios.get("info.json").then((res) => setprojects(res.data.projects));
  }, []);
  let projectsShow = projects.map((proj) => (
    <div key={proj.id} className="portfolio-item padding-15">
      <div className="portfolio-item-inner">
        <div className="portfolio-img">
          <img src={proj.img} />
        </div>
        <div className="portfolio-info">
          <h4>
            <a target="_blank" href={proj.link}>
              {proj.ProjectName}
            </a>
          </h4>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padding-15">
            <h2>Our Works</h2>
          </div>
        </div>
        <div className="row">{projectsShow}</div>
      </div>
    </section>
  );
}

export default Projects;
