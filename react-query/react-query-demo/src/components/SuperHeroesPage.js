import { useEffect, useState } from "react";
import axios from "axios";

function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <>
      <h1>Super Heroes Page</h1>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
}

export default SuperHeroesPage;
