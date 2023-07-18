import { styled } from "styled-components";

export const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 50px 0px;
`;

export const ButtonLogoStyle = styled.img`
  height: 15px;
  margin-right: 5px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  padding: 10px;
  border: none;
  border-radius: 5px;

  &.git {
    background-color: black;
  }

  &.velog {
    background-color: #20c393;
  }

  &.notion {
    color: black;
  }
`;
