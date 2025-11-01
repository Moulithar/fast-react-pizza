import { Link } from "react-router-dom";

const Button = ({ isSubmitting, children, type, to }) => {
  const baseStyles =
    " bg-lime-500 font-semibold hover:bg-lime-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-500  inline-block uppercase text-stone-800  transition-all duration-300   rounded cursor-pointer disabled:cursor-not-allowed";

  const styles = {
    primary: baseStyles + " px-4 py-2 md:px-4 md:py-2 text-sm",
    small: baseStyles + " text-xs px-4 py-2",
    secondary: "px-4 py-1.5 md:px-2 md:py-2  text-sm bg-transparent border-2 border-stone-200 font-semibold hover:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-500  inline-block uppercase text-stone-300 hover:text-stone-800  transition-all duration-300   rounded cursor-pointer disabled:cursor-not-allowed",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={isSubmitting} type={type} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
