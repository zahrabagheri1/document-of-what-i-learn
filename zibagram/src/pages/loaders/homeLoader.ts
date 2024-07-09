import { redirect } from "react-router-dom";
import { auth } from "../../auth";
import { api } from "../../api/api";
import { Post } from "../../@types/type";

export default async function homeLoader() {
  if (!auth.isAuthenticated()) {
    return redirect("/login");
  }

  const postsResponse = await api.requestFetchPosts();
  const postsResponseData = postsResponse.data as Post[];

  console.log(postsResponseData);

  return { posts: postsResponseData };
}
