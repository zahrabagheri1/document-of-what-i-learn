import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes ");
// };

function RQSuperHeroesPage() {
  //? onSuccess and onError are optional
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData({ onSuccess, onError });

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
  // queryKey: ["super-heroes"],
  //   queryFn: () => {
  //     return axios.get("http://localhost:4000/superheroes");
  //   },
  // queryFn: fetchSuperHeroes,
  //gcTime: 5000, //? 5 seconds after the data is stale, it will be removed from the cache {gcTime is garbage collection time}
  // staleTime: 0, //? 2 seconds after the data is stale, it will be refetched
  // refetchOnMount: true,
  // refetchOnWindowFocus: false,
  // refetchInterval: 2000, //? 2 seconds after the data is stale, it will be refetched
  // refetchIntervalInBackground: true, //? 2 seconds after the data is stale, it will be refetched
  // enabled: false, //? if you want to fetch the data manually, you can use this option
  // onSuccess: onSuccess,
  // onError: onError,
  // onSuccess,
  // onError,
  //   select: (data) => {
  //     const superheroNames = data.data.map((hero) => hero.name);
  //     return superheroNames;
  //   },
  // });

  // console.log(data, error);
  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2 className="error">{error.message}</h2>;
  }

  console.log(data.data);

  return (
    <>
      <h1>RQ Super Heroes Page</h1>
      <button onClick={() => refetch()}>Fetch Super Heroes</button>
      <div className="super-heroes-list">
        {data?.data.map((hero) => (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        ))}
      </div>

      {/* {data?.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </>
  );
}

export default RQSuperHeroesPage;
