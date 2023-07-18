import { ButtonStyle } from "./styles";

const Button = ({ buttonName }: { buttonName: string }) => {
  const goLink = (name: string) => {
    if (name.slice(0, 3) === "git") {
      if (name === "git") {
        window.location.href = "https://github.com/lj05117";
      } else if (name.slice(4) === "fyum") {
        window.location.href = "https://github.com/docent-FY-UM/FYUM/tree/main";
      } else if (name.slice(4) === "dawool") {
        window.location.href = "https://github.com/muyeochu/dawool";
      } else {
        window.location.href = "https://github.com/SignBridge/signbridge";
      }
    } else if (name === "velog") {
      window.location.href = "https://velog.io/@lj05117";
    } else {
      window.location.href =
        "https://shore-roadway-33f.notion.site/a05ef24e1eff4e0d93e7fff5889e124f";
    }
  };

  if (buttonName.slice(0, 3) === "git") {
    return (
      <ButtonStyle className={"git"} onClick={() => goLink(buttonName)}>
        github
      </ButtonStyle>
    );
  } else if (buttonName === "velog") {
    return (
      <ButtonStyle className={"velog"} onClick={() => goLink(buttonName)}>
        velog
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle className={"notion"} onClick={() => goLink(buttonName)}>
        portfolio - notion
      </ButtonStyle>
    );
  }
};

export default Button;
