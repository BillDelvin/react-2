const Modal = ({ children, title }) => {
  return (
    <div style={{ borderStyle: "dotted", margin: "20px", borderRadius: "20px", padding: "10px" }}>
      <input type="text" />
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Modal;
