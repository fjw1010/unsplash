import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import logoSvg from "/logo/logo.svg";
import menuSvg from "/icons/menu.svg";
import searchSvg from "/search-icon/search.svg";
import { useState } from "react";

function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 동작을 제거하는 것
    navigate(`/search?query=${value}`);
  };

  return (
    <StHeader>
      <StNav>
        <StLink to="/">
          <img src={logoSvg} alt="logo" />
        </StLink>
        <StForm onSubmit={handleSubmit}>
          <StInput
            onChange={handleChange}
            type="text"
            placeholder="사진과 일러스트 검색"
          />
        </StForm>
        <StLink href="#">탐색</StLink>
        <StLink href="#">로그인</StLink>
        <StButton>
          <img src={menuSvg} alt="메뉴" />
        </StButton>
      </StNav>
      <Nav />
    </StHeader>
  );
}

const StHeader = styled.header`
  font-size: 14px;
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 11px 20px;
`;

const StForm = styled.form`
  flex-grow: 1;
`;

const StInput = styled.input`
  border: none;
  background: #f0f0f0 url(${searchSvg}) no-repeat left 12px center/ 20px auto;
  color: #111111;
  border-radius: 30px;
  padding: 10px 10px 10px 45px;
  width: 100%;
  outline: none;
  border: 1px solid transparent;
  font-weight: 400;

  &:hover {
    background-color: #e4e2e2;
    transition: background-color 2s ease-in-out;
  }

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
  background-color: transparent;
  width: 46px;
`;

const StLink = styled(Link)`
  font-weight: 600;
  color: #767676;

  &:hover {
    color: #111111;
  }
`;

export default Header;
