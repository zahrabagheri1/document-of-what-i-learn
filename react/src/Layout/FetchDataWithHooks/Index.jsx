import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
function Index() {
  // Costum Hooks !!!!!!
  const { data, isLoading, isError } = useFetch({
    url: "https://dog.ceo/api/breeds/image/random",
  });

  if (isLoading) {
    return <div>Loading ......</div>;
  }

  if (isError) {
    return <div>Error!!!!!</div>;
  }
  return <Image src={data?.message} name={"dog"} />;
}

export default Index;

function Image({ src, name }) {
  return <img src={src} alt={name} />;
}
