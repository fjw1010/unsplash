import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useInfiniteSearchPhotos from "../../hooks/useInfiniteSearchPhotos";

function SearchPage() {
  const location = useLocation();
  const search = location.search.split("?query=")[1];
  const [ref, inView] = useInView();
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteSearchPhotos(search);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

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
