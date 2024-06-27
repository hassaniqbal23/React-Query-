import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export function getPostsData() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}
