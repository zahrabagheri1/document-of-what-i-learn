import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

function DynamicParallelQueriesPage({ heroIds }) {
    const queryResults = useQueries({
        queries: heroIds.map((heroId) => ({
            queryKey: ['super-hero', heroId],
            queryFn: () => fetchSuperHero(heroId)
        }))
    })

    console.log(queryResults);

    return <div>DynamicParallelQueriesPage</div>;
}

export default DynamicParallelQueriesPage;
