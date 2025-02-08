import "./hero.scss";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-left">
            <Header />
        </div>
        <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
