import { ButtonStyle } from "./styles";

const Button = ({ buttonName }: { buttonName: string }) => {
  const goLink = (name: string) => {
    name === "git"
      ? (window.location.href = "https://github.com/lj05117")
      : name === "velog"
      ? (window.location.href = "https://velog.io/@lj05117")
      : (window.location.href = "mailto:lj05117@naver.com");
  };

  if (buttonName === "git") {
    return (
      <ButtonStyle className={"git"} onClick={() => goLink("git")}>
        github
      </ButtonStyle>
    );
  } else if (buttonName === "velog") {
    return (
      <ButtonStyle className={"velog"} onClick={() => goLink("velog")}>
        velog
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle className={"email"} title={"lj05117@naver.com"}>
        Email
      </ButtonStyle>
    );
  }
};

export default Button;
