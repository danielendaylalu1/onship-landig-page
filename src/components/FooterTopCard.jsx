/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FooterTopCard = ({ item }) => {
  return (
    <div className="footer-top-card">
      <img src={item.icon} alt="gear" />
      <h3 className="footer-top-card-header">{item.header}</h3>
      <p className="footer-top-card-content">{item.content}</p>
      <a href="#" className="crew-engagment-btn">
        {item.btntext}
      </a>
    </div>
  );
};

export default FooterTopCard;
