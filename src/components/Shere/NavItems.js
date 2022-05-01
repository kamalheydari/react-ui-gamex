import styled from "styled-components";
const items = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Tournament", path: "#tournament" },
  { name: "Team", path: "#team" },
  { name: "Gears", path: "#gears" },
  { name: "Contact", path: "#contact" },
];

const NavItems = (props) => {
  return (
    <NavItemsStyles {...props}>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </NavItemsStyles>
  );
};

const NavItemsStyles = styled.nav`
  a {
    color: var(--platinum);
    transition: var(--transition-1);
    text-transform: uppercase;
    font-family: var() (--oswald);
    padding: 0.3rem;
    font-weight: var(--fw-500);
    letter-spacing: 1px;
    font-size: var(--fs-12);
    &:is(:hover) {
      color: var(--orange);
    }
  }
`;

export default NavItems;
