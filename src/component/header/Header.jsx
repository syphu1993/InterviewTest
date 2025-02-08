import "./header.scss";
import iconArrow from "../../assets/icons/icon-header.png";
import iconExpand from "../../assets/icons/icon-expand-menu.png";
const Header = () => {
  const listItem = ["Tutorials", "Case studies", "Resources"];
  const menuItems = [];
  listItem.forEach((item, index) => {
    menuItems.push(<span key={`item-${index}`}>{item}</span>);
    if (index < listItem.length - 1) {
      menuItems.push(
        <span key={`dot-${index}`} className="dot">
          {" "}
          •{" "}
        </span>
      );
    }
  });
  return (
    <div className="container-header">
      <div className="flex-row item-center">
        <img className="icon-arrow" src={iconArrow} alt="" />
        <div className="text-brand hidden-desktop">macode.</div>
      </div>
      <div className="menu hidden-480">{menuItems}</div>
      <div className="flex-row item-center">
        <div className="language"></div>
        <img className="hidden-desktop icon-expand" src={iconExpand} alt="" />
      </div>
    </div>
  );
};

export default Header;
