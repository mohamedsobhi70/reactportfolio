import "./style.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";
import { Route } from "react-router-dom";
function Landing() {
  return (
    <div className="landing">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default Landing;
