import {
  IntroContainer,
  IntroTitle,
  IntroContentContainer,
  IntroContent,
  IntroImgStyle,
} from "./styles";
import ProfilImage from "../../assets/profil-Image.jpg";
import Button from "../../components/Button";

const HomePage = () => {
  return (
    <IntroContainer>
      <IntroImgStyle src={ProfilImage}></IntroImgStyle>

      <IntroContentContainer>
        <IntroTitle>이지예ㅣ스며드는 개발자</IntroTitle>
        <IntroContent>안녕하세요! 프론트엔드 개발자 이지예 입니다.</IntroContent>
        <IntroContent>
          어떤 팀이든 잘 스며들어 팀과의 협업에 유연하게 적응할 수 있습니다.
        </IntroContent>
        <IntroContent>새로운 개발 기술에 대한 빠른 적응력을 가지고 있습니다.</IntroContent>

        <Button />
      </IntroContentContainer>
    </IntroContainer>
  );
};
export default HomePage;
