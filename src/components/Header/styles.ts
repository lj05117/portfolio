import { styled } from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  z-index: 10;
`;

export const HeaderContentDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 30%;
`;

export const HeaderContent = styled.a`
  color: white;
  text-decoration: none;
  margin: auto;
`;
