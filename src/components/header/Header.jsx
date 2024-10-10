import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";

// TODO: 1. react-router-dom 설정
// TODO: 2. 로고 여백 16
function Header() {
  return (
    <StHeader>
      <StNav>
        <StLink to="/">
          <img src="/logo/logo.svg" alt="" />
        </StLink>
        <StForm>
          <StInput type="text" placeholder="사진과 일러스트 검색" />
        </StForm>
        <a href="#">탐색</a>
        <a href="#">로그인</a>
        <StButton>
          <img src="/icons/menu.png" alt="메뉴" />
        </StButton>
      </StNav>
      <Nav></Nav>
    </StHeader>
  );
}

const StHeader = styled.header`
  padding: 11px 20px;
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const StForm = styled.form`
  flex-grow: 1;
`;

const StInput = styled.input`
  border: none;
  background-color: #f1f1f1;
  &:hover {
    background-color: #e4e2e2;
    transition: background-color 2s ease-in-out;
  }
  border-radius: 30px;
  padding: 10px;
  width: 100%;
  outline: none;

  &:focus {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
  }
  &:active {
    transition: background-color 2s ease-in;
  }
`;

const StButton = styled.button`
  border: none;
  /* color: white; */
  background-color: transparent;
  width: 24px;
  height: 24px;
`;

const StLink = styled(Link)``;

export default Header;
