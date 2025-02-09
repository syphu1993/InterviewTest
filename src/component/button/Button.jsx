import iconVector from "../../assets/icons/vector-btn.png";
import PropTypes from "prop-types";

import "./button.scss";
const Button = ({
  width,
  height,
  radius,
  background,
  content,
  isIcon,
  padding,
  fontSize,
  color,
}) => {
  return (
    <button
      className="btn flex-row item-center space-between "
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        background: background,
        padding: `${padding}px`,
      }}
    >
      <span style={{ fontSize: `${fontSize}px`, color: color }}>{content}</span>
      {isIcon && <img className="icon-button" src={iconVector} alt="" />}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  radius: PropTypes.number,
  background: PropTypes.string,
  content: PropTypes.string.isRequired,
  isIcon: PropTypes.bool,
  padding: PropTypes.number,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

Button.defaultProps = {
  radius: 0,
  background: "transparent",
  isIcon: false,
  padding: 10,
  fontSize: 16,
  color: "#000",
};
export default Button;
