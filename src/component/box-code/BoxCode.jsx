import "./code.scss";
import Loader from "./loader/Loader";
import ToolCode from "./tool-code/ToolCode";
import iconFile from "../../assets/icons/file.png";
import iconShare from "../../assets/icons/share.png";
import iconSearch from "../../assets/icons/search.png";

const BoxCode = ({ contentCode, widthContent, listLineLoaders }) => {
  const backgroundTool = {
    background: "#F8F5F5",
  };
  const listIconTool = [
    { id: 1, src: iconFile },
    { id: 2, src: iconSearch },
    { id: 3, src: iconShare },
  ];
  return (
    <div className="box-code flex-row">
      <ToolCode background={backgroundTool} icons={listIconTool} />
      <div>
        <div
          className="code"
          style={{ width: `${widthContent}px` }}
          dangerouslySetInnerHTML={{ __html: contentCode }}
        />
        {listLineLoaders.map((item) => (
          <Loader key={item.id} width={item.width} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default BoxCode;
