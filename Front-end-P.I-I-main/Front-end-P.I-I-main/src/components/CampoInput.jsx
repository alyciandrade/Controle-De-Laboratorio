import "../assets/styles/login.css";

const CampoInput = ({
  className,
  name,
  type,
  placeholder,
  source,
  icon,
  value
}) => {
  return (
    <div className={className}>
      <input
        onChange={(e) => value(e.target.value)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <div>{source ? <img className={icon} src={source} alt="" /> : ""}</div>
    </div>
  );
};

export default CampoInput;
