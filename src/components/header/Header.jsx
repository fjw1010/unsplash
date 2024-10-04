import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <StNav>
        <a href="">
          <img src="/logo/logo.svg" alt="" />
        </a>
        <StFrom>
          <StInput type="text" />
        </StFrom>
        <a href="">탐색</a>
        <a href="">광고</a>
        <a href="">Unsplash+ 구독</a>
        <a href="">로그인</a>
        <a href="">이미지 제출</a>
        <StButton>
          <img src="/logo/hamburger-menu-icon.svg" alt="" />
        </StButton>
      </StNav>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 100px;
`;

const StFrom = styled.from``;

const StInput = styled.input`
  border: none;
  background-color: #e7e7e7;
  border-radius: 30px;
  padding: 10px;
`;

const StButton = styled.button`
  border: none;
  color: white;
`;
