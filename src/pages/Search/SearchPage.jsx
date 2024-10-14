import { useQuery } from "@tanstack/react-query";
import { getSearchPhotos } from "../../api/search";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  const search = location.search.split("?query=")[1];

  const {
    data = [],
    isLodding,
    error,
  } = useQuery({
    queryKey: ["search", search],
    queryFn: () => getSearchPhotos(decodeURIComponent(search)), // api를 요청하는 함수를 넣기
  });

  return (
    <>
      {data?.results?.map((data) => {
        return (
          <div key={data.urls.regular}>
            <img src={data.urls.regular} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default SearchPage;
