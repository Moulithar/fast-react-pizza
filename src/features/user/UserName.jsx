import { useSelector } from "react-redux";


const UserName = () => {
  const { username } = useSelector((state) => state.user);


if (!username) {
  return null;
}


  return (
    <div className="hidden md:block text-lime-900 text-sm font-semibold uppercase">
      {username}
    </div>
  );
};

export default UserName;
