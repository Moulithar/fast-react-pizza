import React from "react";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");


  const handleSubmit = (e) => {
    if(!query.trim()){
        return
    }
    e.preventDefault();
    navigate(`/order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-24 md:w-48 p-1 md:p-2 md:focus:w-64  rounded-full transition-all duration-300 placeholder:text-stone-100  focus:ring ring-lime-400 "
      />
    </form>
  );
};

export default SearchOrder;


export  async function getOrderFn({params}) {
    try {
      const orderDetails = await getOrder(params.orderId);
     return (orderDetails);
    } catch (error) {
      console.log(error);
    }
  };