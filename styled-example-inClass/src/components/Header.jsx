import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Button color="#a62440">Apply Courses</Button>
      <Button bg="#a62440">Talk to Adviser</Button>
    </StyledHeader>
  );
};

export default Header;
