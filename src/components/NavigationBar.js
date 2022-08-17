import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>AWFILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPER HERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar