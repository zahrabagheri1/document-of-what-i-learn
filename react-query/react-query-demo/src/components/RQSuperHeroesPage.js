import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroesPage() {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["super-heroes"],
    //   queryFn: () => {
    //     return axios.get("http://localhost:4000/superheroes");
    //   },
    queryFn: fetchSuperHeroes,
    gcTime: 5000, // 5 seconds after the data is stale, it will be removed from the cache {gcTime is garbage collection time}
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2 className="error">{error.message}</h2>;
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
