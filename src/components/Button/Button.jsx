import styled from "styled-components";

function Button({ children }) {
  return <StButton onClick={() => {}}>{children}</StButton>;
}

// 디자인만 통일 시키면 되는거 아닐까요?
const StButton = styled.button`
  transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
  color: #555;
  cursor: pointer;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 11px;
  height: 32px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  min-width: 40px;

  &:hover {
    color: #111;
    background: linear-gradient(180deg, transparent 50%, rgba(10, 20, 30, 0.06)),
      #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
