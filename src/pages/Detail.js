import { useParams } from "react-router";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>Detail page</h1>
      <h2>Params id: {id}</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default Detail;
