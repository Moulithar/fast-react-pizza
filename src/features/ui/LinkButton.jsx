import { useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="text-sm text-lime-600 hover:text-stone-800 hover:underline transition-all duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default LinkButton;
