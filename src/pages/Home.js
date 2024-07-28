import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGoToDetail = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} | {" "}
              <button onClick={() => handleGoToDetail(user.id)}>
                Go to detail
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
