// import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Avatar() {
  return (
    <StAvatarWrap>
      <StAvatarProfileWrap>
        <StProfileLink>
          <StAvatarImage src="" alt="" />
          <StStrong>누구게</StStrong>
        </StProfileLink>
      </StAvatarProfileWrap>
      <StAvatarButtonWrap>
        <Button>
          <img
            src="./public/card-hover/arrow-down.svg"
            alt=""
            width={16}
            height={16}
          />
        </Button>
      </StAvatarButtonWrap>
    </StAvatarWrap>
  );
}

// 전체 부모
const StAvatarWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 프로필 아바타 부모
const StAvatarProfileWrap = styled.div`
  color: #fff;
`;

const StProfileLink = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

// 버튼 부모
const StAvatarButtonWrap = styled.div`
  cursor: pointer;
  display: flex;
`;

// 버튼 랩핑의 자식
const StStrong = styled.strong`
  color: #fff;
  font-size: 15px;
`;

const StAvatarImage = styled.img`
  background-color: gray;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

export default Avatar;
