type NavItem = {
  id: number;
  name: string;
  to: string;
};
const navLinks: NavItem[] = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About Me", to: "/about-me" },
  { id: 3, name: "Projects", to: "/projects" },
  { id: 4, name: "Contact", to: "/contact" },
];

export { navLinks };
