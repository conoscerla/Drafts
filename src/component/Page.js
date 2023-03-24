import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */

  background-image: linear-gradient(
    90.2deg,
    rgba(154, 52, 37, 1) 7.8%,
    rgba(242, 115, 47, 1) 87.9%
  );

  /* робимо фон на всю ширину */
  width: 100%;

  /* фіксуємо фон на одному місці */
  background-attachment: fixed;
`;
