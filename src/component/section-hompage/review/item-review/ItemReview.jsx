import "./item.scss";
const ItemReview = ({ icon, title, content }) => {
  return (
    <div className="container-item flex-column item-start space-between">
      <img src={icon} alt="" />
      <div>
        <p className="medium-title title">{title}</p>
        <p className="small-text">{content}</p>
      </div>
    </div>
  );
};

export default ItemReview;
