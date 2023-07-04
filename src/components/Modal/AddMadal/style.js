import styled from "styled-components";

export const LiCard = styled.li`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

`;