import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Indian Heritage</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;