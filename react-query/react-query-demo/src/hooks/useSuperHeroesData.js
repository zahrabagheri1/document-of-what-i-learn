// Hook to fetch super heroes data

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    onSuccess,
    onError,
    select: (data) => {
      const superheroNames = data.data.map((hero) => hero.name);
      return superheroNames;
    },
  });
};
