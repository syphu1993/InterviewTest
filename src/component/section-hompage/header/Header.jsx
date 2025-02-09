import "./header.scss";
import iconArrow from "../../../assets/icons/icon-header.png";
import DropdownLanguages from "../../dropdown-languages/DropdownLanguage";

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
        <div className="text-brand hidden-lg">macode.</div>
      </div>
      <div className="menu hidden-sm">{menuItems}</div>
      <DropdownLanguages />
    </div>
  );
};

export default Header;
