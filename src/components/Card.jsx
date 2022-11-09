const Card = ({ title, subtitle }) => {
  return (
    <div style={{ borderStyle: "solid", margin: "20px", borderRadius: "20px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
