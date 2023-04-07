import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 16px;
`;

const NavbarBrand = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const NavbarLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

interface NavbarProps {
  links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <NavbarContainer>
      <NavbarBrand href="/">My App</NavbarBrand>
      <div>
        {links.map((link) => (
          <NavbarLink key={link.url} href={link.url}>
            {link.name}
          </NavbarLink>
        ))}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
