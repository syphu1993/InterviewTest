import "./about.scss";
import imageFirstAbout from "../../../assets/images/first-about.png";
import imageSecondAbout from "../../../assets/images/second-about.png";
import imageThirdAbout from "../../../assets/images/third-about.png";

const About = () => {
  const listLogo = [
    {
      id: 1,
      src: imageFirstAbout,
    },
    {
      id: 2,
      src: imageSecondAbout,
    },
    {
      id: 3,
      src: imageThirdAbout,
    },
  ];
  return (
    <div className="container-about flex-row item-center space-between">
      {listLogo.map((item) => (
        <img key={item.id} src={item.src} alt="" />
      ))}
    </div>
  );
};

export default About;
