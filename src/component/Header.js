import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>{name}</NameTag>
      <LoginButton onClick={onClick}>Вхід</LoginButton>
    </HeaderTag>
  );
}

const LoginButton = styled.div`
  color: #fff;

  padding: 8px 32px;

  border: 1px solid #000;

  background-image: radial-gradient(
    circle 860px at 14.7% 28.8%,
    rgba(255, 121, 42, 1) 0%,
    rgba(250, 234, 105, 1) 83.2%
  );

  transition: opacity 0.7s;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  border-radius: 15px;
`;

const NameTag = styled.div`
  color: #fff;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #3c3d3d;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  /* color: #fff; */

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px 30px;
`;
