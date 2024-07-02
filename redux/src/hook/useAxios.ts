import { useEffect, useState } from "react";
import { AXIOS } from "../config/axios";
import { AxiosRequestConfig } from "axios";

// interface useAxiosProps {
//   method: "get" | "post" | "put" | "patch";
//   url: string;
//   body: string;
//   params: string;
// }

// export const useAxios = <TData, TError>({  method, data, params, url, headers }: useAxiosProps) => {
export const useAxios = <TRequest = any, TResponse = any, TError = any>({
  ...rest
}: AxiosRequestConfig<TRequest>) => {
  // ...rest => method, data, params, url, headers
  const [data, setData] = useState<TResponse>();
  const [error, setError] = useState<TError>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    AXIOS.request({
      ...rest,
    })
      .then((res) => setData(res.data))
      .catch((error) => {
        setError(error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));

    // AXIOS[method](url, null, {
    //   data: body,
    //   params,
    // })
    //   .then((res) => setData(res.data))
    //   .catch((error) => {
    //     setError(error);
    //     setIsError(true);
    //   })
    //   .finally(() => setIsLoading(false));
  };

  return { data, error, isError, isLoading };
};

// AXIOS.get("test");
// AXIOS.post("test", {}, {});
// AXIOS.put("test", {}, {});
// AXIOS.patch("test", {}, {});
