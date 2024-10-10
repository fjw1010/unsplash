import { Link } from "react-router-dom";

const menus = ["사진", "일러스트", "Unsplash+"];
const categories = [
  "3D 렌더링",
  "마리",
  "건축 및 인테리어",
  "실험적인",
  "패션 & 뷰티",
  "필름",
  "식음료",
  "자연",
  "사람",
  "스포츠",
  "여행하다",
  "라이징 스타",
];

function Nav() {
  return (
    <nav>
      <ul>
        {menus.map((menu) => {
          return (
            <li key={menu}>
              <Link>{menu}</Link>
            </li>
          );
        })}
      </ul>
      <ul>
        {categories.map((menu) => {
          return (
            <li key={menu}>
              <Link>{menu}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
