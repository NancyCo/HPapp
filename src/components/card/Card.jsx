import "./card.css";
const Card = ({ name, image }) => {
  const imagePlaceholder =
    "https://p.kindpng.com/picc/s/77-770241_wizard-hat-to-color-hd-png-download.png";
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img
            src={image || imagePlaceholder}
            alt="hpimage"
            className="character-image"
          />
        </div>
        <div> {name} </div>
      </div>
    </div>
  );
};

export default Card;
