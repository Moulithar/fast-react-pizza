import CreateUser from "../user/CreateUser";

function Home() {
  return (
    <div className=" my-32 px-4 md:px-0 sm:my-10 text-center">
      <h1 className=" mb-8 text-2xl font-bold  text-center">
        The best pizza.
        <br />
       <span className="text-lime-500">Straight out of the oven, straight to you.</span>
     
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
