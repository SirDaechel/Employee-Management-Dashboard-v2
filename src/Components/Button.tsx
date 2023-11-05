type ButtonProp = {
  icon: any;
  text: string;
  className: string;
};

const Button = ({ icon, text, className }: ButtonProp) => {
  return (
    <button className={className}>
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
