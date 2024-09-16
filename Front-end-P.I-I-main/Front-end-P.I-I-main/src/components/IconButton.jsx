import "../assets/styles/home.css"
import {Link} from 'react-router-dom'

const IconButton = ({className, source, texto, act }) => {
  return (
    <Link to={act} className={className}>
          <img 
          className="img_button"
          src={source}
          alt="Background"/>
          <span>{texto}</span>
    </Link>
  );
};

export default IconButton;



