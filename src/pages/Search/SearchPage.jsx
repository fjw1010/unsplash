import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchPhotos } from "../../api/search";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";

function SearchPage() {
  const location = useLocation();
  const search = location.search.split("?query=")[1];
  const [ref, inView] = useInView();

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <div>로딩 중 입니다...</div>;
  }

  return (
    <>
      {data?.map((data) => {
        return (
          <div key={data.urls.regular}>
            <img src={data.urls.regular} alt="" />
          </div>
        );
      })}
      <Div ref={ref} />
    </>
  );
}

const Div = styled.div``;
export default SearchPage;
