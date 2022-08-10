import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          
          <Navbar.Brand>eBasket</Navbar.Brand>

          <Nav className="me-auto">
            <Link to="/" role="button" className="nav-link">Home</Link>
            <Link to="products" role="button" className="nav-link">Products</Link>
          </Nav>

          <Nav>
            <Link to="cart" role="button" className="nav-link">
              <Button variant="primary">Cart</Button>
            </Link>

            <NavDropdown title="John" id="collasible-nav-dropdown">
                <Link to="profile" className="dropdown-item" data-rr-ui-dropdown-item>Profile</Link>
                <Link to="orders" className="dropdown-item" data-rr-ui-dropdown-item>My Orders</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;