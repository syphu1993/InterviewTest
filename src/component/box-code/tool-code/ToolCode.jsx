import "./tool.scss";
import iconUser from "../../../assets/icons/user.png";
import PropTypes from "prop-types";

const ToolCode = ({ background, icons }) => {
  return (
    <div className="tool-code flex-column space-between" style={background}>
      <div className="flex-column item-center list-tools">
        {icons.map((item) => (
          <img key={item.src} className="icon-tool" src={item.src} alt="" />
        ))}
      </div>
      <img className="icon-tool" src={iconUser} alt="" />
    </div>
  );
};

ToolCode.propTypes = {
  background: PropTypes.object.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ToolCode;
