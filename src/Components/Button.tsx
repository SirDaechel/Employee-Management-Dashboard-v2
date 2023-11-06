import { Link } from "react-router-dom";

type ButtonProp = {
  icon: any;
  text: string;
  className: string;
  linkTo?: string;
};

const Button = ({ icon, text, className, linkTo }: ButtonProp) => {
  return (
    <Link to={linkTo ? linkTo : ""} className={className}>
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default Button;
