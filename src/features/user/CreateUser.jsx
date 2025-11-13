import Button from "../ui/Button";
import DndList from "./DndList";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameFromStore = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  useEffect(() => {
    if (usernameFromStore) {
      setUsername(usernameFromStore);
    }
  }, [usernameFromStore]);

  return usernameFromStore ? (
    <h1>Hello {usernameFromStore}</h1>
  ) : (
    <form onSubmit={handleSubmit} className="">
      <p className="mb-4">👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72 mb-8"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
      <DndList />
    </form>
  );
}

export default CreateUser;
