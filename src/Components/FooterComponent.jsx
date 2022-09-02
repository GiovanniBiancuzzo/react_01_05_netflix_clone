import { ListGroup, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = (props) => (
    <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-expand-lg "
        // style={{ backgroundColor: "#221f1f" }}
    >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </Nav> */}
            <Nav className="mr-auto">
                <ListGroup>
                    <ListGroup.Item href="#">
                        Audio and Subtitles
                    </ListGroup.Item>
                    <ListGroup.Item href="#">Media Center</ListGroup.Item>
                    <ListGroup.Item href="#">Privacy</ListGroup.Item>
                    <ListGroup.Item href="#">Contact us</ListGroup.Item>
                </ListGroup>
            </Nav>
            <Nav className="mr-auto">
                <ListGroup>
                    <ListGroup.Item href="#">Audio Description</ListGroup.Item>
                    <ListGroup.Item href="#">Investor Relations</ListGroup.Item>
                    <ListGroup.Item href="#">Legal Notices</ListGroup.Item>
                </ListGroup>
            </Nav>
            <Nav className="mr-auto">
                <ListGroup>
                    <ListGroup.Item href="#">Help Center</ListGroup.Item>
                    <ListGroup.Item href="#">Jobs</ListGroup.Item>
                    <ListGroup.Item href="#">Cookie Preferences</ListGroup.Item>
                </ListGroup>
            </Nav>
            <Nav className="mr-auto">
                <ListGroup>
                    <ListGroup.Item href="#">Gift Cards</ListGroup.Item>
                    <ListGroup.Item href="#">Terms of Use</ListGroup.Item>
                    <ListGroup.Item href="#">
                        Corporate Information
                    </ListGroup.Item>
                </ListGroup>
            </Nav>
            <div className="row">
                <div className="col col-12 text-left mb-2">
                    <button
                        type="button"
                        className="btn btn-sm footer-button rounded-0 mt-3"
                    >
                        Service Code
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 text-left mb-2 mt-2 copyright">
                    © 1997-2022 Netflix, Inc.
                </div>
            </div>
        </Navbar.Collapse>
    </Navbar>
);

export default FooterComponent;
