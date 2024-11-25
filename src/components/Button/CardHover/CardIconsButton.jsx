import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Avatar from "../../Avatar/Avatar";

const cardImages = [
  {
    name: "plusIcon",
    img: "./public/card-hover/plus.svg",
  },
  {
    name: "likeIcon",
    img: "./public/card-hover/like.svg",
  },
];

function CardIconsButton() {
  return (
    <StHoverWrap>
      <StButtonWrap>
        {cardImages.map((icon) => {
          return (
            <Button key={icon} onClick={() => {}}>
              <StIconsImageLink>
                <img src={icon.img} alt="" width={16} height={16} />
              </StIconsImageLink>
            </Button>
          );
        })}
      </StButtonWrap>
      <Avatar />
    </StHoverWrap>
  );
}

const StHoverWrap = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 20px;
  z-index: 1px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: zoom-in;
  transition: opacity 0.1s;
`;

const StButtonWrap = styled.article`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  gap: 8px;
  color: #555;
`;

const StIconsImageLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export default CardIconsButton;
