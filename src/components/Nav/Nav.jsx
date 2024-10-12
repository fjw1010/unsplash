import { Link } from "react-router-dom";
import styled from "styled-components";

const menus = ["사진", "일러스트", "Unsplash+"];
const categories = [
  "3D 렌더링",
  "마리",
  "건축 및 인테리어",
  "실험적인",
  "패션 & 뷰티",
  "필름",
  "식음료",
];

function Nav() {
  return (
    <StNav>
      <StCategoriesUl>
        {menus.map((menu) => {
          return (
            <li key={menu}>
              <StLink>{menu}</StLink>
            </li>
          );
        })}
      </StCategoriesUl>
      <StBorderRight />
      <StCategoriesUl>
        {categories.map((menu) => {
          return (
            <li key={menu}>
              <StLink>{menu}</StLink>
            </li>
          );
        })}
      </StCategoriesUl>
    </StNav>
  );
}

const StNav = styled.nav`
  display: flex;
  gap: 24px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.12);
  padding: 0 20px;
  justify-content: start;
  align-items: center;
`;

const StCategoriesUl = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 14px;
  line-height: 24px;
  color: #767676;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  height: 56px;
`;

const StBorderRight = styled.div`
  width: 1px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.12);
`;

const StLink = styled(Link)`
  font-weight: 500;
  color: #767676;

  &:hover {
    color: #111111;
  }
`;

export default Nav;
