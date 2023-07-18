import { ButtonStyle } from "./styles";

const Button = ({ buttonName }: { buttonName: string }) => {
  const goLink = (name: string) => {
    name === "git"
      ? (window.location.href = "https://github.com/lj05117")
      : name === "velog"
      ? (window.location.href = "https://velog.io/@lj05117")
      : (window.location.href =
          "https://shore-roadway-33f.notion.site/a05ef24e1eff4e0d93e7fff5889e124f");
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
      <ButtonStyle className={"notion"} onClick={() => goLink("notion")}>
        portfolio - notion
      </ButtonStyle>
    );
  }
};

export default Button;
