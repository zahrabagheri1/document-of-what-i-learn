import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroesPage() {
  const { isLoading, data } = useQuery({
    queryKey: ["super-heroes"],
    //   queryFn: () => {
    //     return axios.get("http://localhost:4000/superheroes");
    //   },
    queryFn: fetchSuperHeroes,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>RQ Super Heroes Page</h1>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
}

export default RQSuperHeroesPage;
