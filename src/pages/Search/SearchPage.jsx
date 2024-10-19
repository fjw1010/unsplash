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
      <StUl>
        {data?.map((data) => {
          return (
            <StLi key={data.urls.regular}>
              <Images src={data.urls.regular} alt="" />
            </StLi>
          );
        })}
      </StUl>
      <div ref={ref} />
    </>
  );
}

const StUl = styled.ul`
  padding: 0 20px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 8px;
`;
const StLi = styled.li`
  width: calc(33.3333% - 5.3333px);
`;

const Images = styled.img`
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export default SearchPage;
