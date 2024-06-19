import React, { useEffect, useState } from "react";

function Index() {
  // fetch Data !!!!!!
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading ......</div>;
  }
  return <Image src={data?.message} name={"dog"} />;
}

export default Index;

function Image({ src, name }) {
  return <img src={src} alt={name} />;
}
