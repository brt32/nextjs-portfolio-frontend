import {
  FaSignInAlt,
  FaSignOutAlt,
  FaGithub,
  FaLinkedin,
  FaAddressBook,
  FaAddressCard,
  FaTachometerAlt,
  FaBlog,
  FaTasks,
} from "react-icons/fa";
import { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import Search from "./Search";
import NavHelp from "@/styles/NavHelp.module.css";

export default function MyNavbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className={NavHelp.nav}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Link href="/" passHref>
          <Navbar.Brand>brt32-Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/events" passHref>
              <Nav.Link>
                <FaTasks /> Projects
              </Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link>
                <FaBlog /> Blog
              </Nav.Link>
            </Link>
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <Link href="/github" passHref>
                <NavDropdown.Item>
                  <FaGithub /> Github
                </NavDropdown.Item>
              </Link>
              <Link href="/linkedin" passHref>
                <NavDropdown.Item>
                  <FaLinkedin /> LinkedIn
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/contact" passHref>
                <NavDropdown.Item href="/contact">
                  <FaAddressBook /> Contact
                </NavDropdown.Item>
              </Link>
              <Link href="/about" passHref>
                <NavDropdown.Item>
                  <FaAddressCard /> About
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Link href="/account/dashboard" passHref>
                  <Nav.Link>
                    <FaTachometerAlt /> Dashboard
                  </Nav.Link>
                </Link>
                <Nav.Link onClick={() => logout()}>
                  <FaSignOutAlt /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Link href="/account/login" passHref>
                  <Nav.Link>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                </Link>
              </>
            )}
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
