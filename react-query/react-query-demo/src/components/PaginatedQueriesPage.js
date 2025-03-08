import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

function PaginatedQueriesPage() {
  const [pageNumber, setPageNumber] = React.useState(1);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["colors", pageNumber],
    queryFn: () => fetchColors(pageNumber),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}-{color.label}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PaginatedQueriesPage;
