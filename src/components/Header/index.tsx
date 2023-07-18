import { HeaderDiv, HeaderContentDiv, HeaderContent } from "./styles";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContentDiv>
        <HeaderContent href="/">Home</HeaderContent>
        <HeaderContent href="/project">Project</HeaderContent>
        <HeaderContent href="/image">Image</HeaderContent>
      </HeaderContentDiv>
    </HeaderDiv>
  );
};
export default Header;
