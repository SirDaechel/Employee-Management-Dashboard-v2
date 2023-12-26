import { Link } from "react-router-dom";

type ButtonProp = {
  icon: any;
  text: string;
  className: string;
  linkTo?: string;
};

const Button: React.FC<ButtonProp> = ({ icon, text, className, linkTo }) => {
  return (
    <Link to={linkTo ? linkTo : ""} className={className}>
      {icon}
      <p className="ss:hidden">{text}</p>
    </Link>
  );
};

export default Button;
