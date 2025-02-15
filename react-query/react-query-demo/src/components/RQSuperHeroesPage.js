import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroesPage() {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["super-heroes"],
    //   queryFn: () => {
    //     return axios.get("http://localhost:4000/superheroes");
    //   },
    queryFn: fetchSuperHeroes,
    //gcTime: 5000, // 5 seconds after the data is stale, it will be removed from the cache {gcTime is garbage collection time}
    // staleTime: 0, // 2 seconds after the data is stale, it will be refetched
    // refetchOnMount: true,
    // refetchOnWindowFocus: false,
    // refetchInterval: 2000, // 2 seconds after the data is stale, it will be refetched
    // refetchIntervalInBackground: true, // 2 seconds after the data is stale, it will be refetched
    enabled: false, // if you want to fetch the data manually, you can use this option
  });

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2 className="error">{error.message}</h2>;
  }

  return (
    <>
      <h1>RQ Super Heroes Page</h1>
      <button onClick={() => refetch()}>Fetch Super Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
}

export default RQSuperHeroesPage;
