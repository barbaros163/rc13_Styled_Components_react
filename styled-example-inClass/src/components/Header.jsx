import Button from "./styles/Button.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#a62440">Apply Courses</Button>
          <Button bg="#a62440">Talk to Adviser</Button>
        </div>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
