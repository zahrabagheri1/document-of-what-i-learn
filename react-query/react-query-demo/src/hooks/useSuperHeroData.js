
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchSuperHero = ({ queryKey }) => {
//   const heroId = queryKey[1];
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery({
    queryKey: ["super-hero", heroId],
    queryFn: () => fetchSuperHero(heroId),
  });
};

