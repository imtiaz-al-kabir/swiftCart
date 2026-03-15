import Container from "../common/Container";
import Logo from "../common/Logo";
import { ModeToggle } from "../ui/node-toggle";

const Header = () => {
  return (
    <header className="py-5 border-b border-b-border">
      <Container className="flex justify-between">
        <Logo />
        <div>home </div>
        <div>
          <ModeToggle />
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
