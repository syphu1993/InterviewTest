import iconVector from "../../assets/icons/vector-btn.png";

import "./button.scss";
const Button = ({
  width,
  height,
  radius,
  background,
  content,
  isIcon,
  paddingX,
  paddingY,
  fontSize,
  color,
}) => {
  return (
    <button
      className="btn flex-row item-center space-between "
      style={{
        width: width,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        background: background,
        padding: `${paddingY}px ${paddingX}px`,
      }}
    >
      <span style={{ fontSize: `${fontSize}px`, color: color }}>{content}</span>
      {isIcon && <img className="icon-button" src={iconVector} alt="" />}
    </button>
  );
};

export default Button;
