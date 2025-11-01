import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 text-sm md:text-base text-stone-200 px-4 py-4 sm:px-6">
      <p className=" space-x-4 text-stone-300 font-semibold ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="uppercase tracking-wide">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
