import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchPhotos } from "../api/search";

function useInfiniteSearchPhotos(search) {
  return useInfiniteQuery({
    queryKey: ["infiniteSearch", search],
    queryFn: ({ pageParam = 1 }) =>
      getSearchPhotos(decodeURIComponent(search), pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.total_pages > pages.length) {
        return pages.length + 1;
      }
      return undefined;
    },
    select: ({ pages }) => {
      return pages?.flatMap(({ results }) => results);
    },
  });
}

export default useInfiniteSearchPhotos;
