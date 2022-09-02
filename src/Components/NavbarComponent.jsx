import { Form, FormControl, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => (
    <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-expand-lg navbar-dark"
    >
        <Navbar.Brand href="https://www.netflix.com">
            <img
                src="/public/logo.png"
                width="100px"
                height="50px"
                className="d-inline-block align-top"
                alt="Netflix logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#tvShows">Tv Shows</Nav.Link>
                <Nav.Link href="#movies">Movies</Nav.Link>
                <Nav.Link href="#recentlyAdded">Recently Added</Nav.Link>
                <Nav.Link href="#myList">My List</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#search">
                    <FontAwesomeIcon icon={faSearch} />
                </Nav.Link>
                <NavDropdown title="Cerca" id="collasible-nav-dropdown">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                </NavDropdown>
                <Nav.Link href="#kids" id="kids">
                    KIDS
                </Nav.Link>
                <Nav.Link href="#notifications">
                    <FontAwesomeIcon icon={faBell} />
                </Nav.Link>
                <Nav.Link href="#profile">
                    <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavbarComponent;
