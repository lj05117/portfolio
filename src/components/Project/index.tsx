import {
  ProjectContainer,
  ProjectContent,
  ProjectContentContainer,
  ProjectImageStyle,
  ProjectLogo,
  ProjectTitleStyle,
} from "./styles";

import fyum from "../../assets/fyumIntro.gif";
import fyumLogo from "../../assets/fyumLogo.png";
import dawool from "../../assets/dawoolIntro.gif";
import dawoolLogo from "../../assets/dawoolLogo.png";
import signbridge from "../../assets/signbridge.png";
import signbridgeLogo from "../../assets/signbridgeLogo.png";

import Button from "../Button";

const Project = ({ name }: { name: string }) => {
  if (name === "fyum")
    return (
      <ProjectContainer>
        <ProjectImageStyle src={fyum}></ProjectImageStyle>
        <ProjectContentContainer>
          <ProjectLogo src={fyumLogo}></ProjectLogo>
          <ProjectTitleStyle>피움</ProjectTitleStyle>
          <ProjectContent>온라인 전시회 서비스</ProjectContent>
          <Button buttonName="git-fyum"></Button>
        </ProjectContentContainer>
      </ProjectContainer>
    );
  else if (name === "dawool") {
    return (
      <ProjectContainer>
        <ProjectContentContainer>
          <ProjectLogo src={dawoolLogo}></ProjectLogo>
          <ProjectTitleStyle>다울</ProjectTitleStyle>
          <ProjectContent>무장애 여행지 추천 웹서비스</ProjectContent>
          <Button buttonName="git-dawool"></Button>
        </ProjectContentContainer>
        <ProjectImageStyle src={dawool}></ProjectImageStyle>
      </ProjectContainer>
    );
  } else {
    return (
      <ProjectContainer>
        <ProjectImageStyle src={signbridge}></ProjectImageStyle>
        <ProjectContentContainer>
          <ProjectLogo src={signbridgeLogo}></ProjectLogo>
          <ProjectTitleStyle>손길</ProjectTitleStyle>
          <ProjectContent>농인을 위한 통신 중계 서비스</ProjectContent>
          <Button buttonName="git-signbridge"></Button>
        </ProjectContentContainer>
      </ProjectContainer>
    );
  }
};

export default Project;
