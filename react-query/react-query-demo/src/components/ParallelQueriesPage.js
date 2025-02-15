import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueriesPage() {
  const { data: superHeroes } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: fetchSuperHeroes,
  });
  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  console.log(superHeroes, friends);

  return <h1>ParallelQueriesPage</h1>;
}

export default ParallelQueriesPage;
