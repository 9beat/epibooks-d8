
// dependencies
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// assets 
import logo from '../assets/logo.svg';

// MyNav style
import './MyNav.css';

// MAIN NAVBAR home/about/browse/logo
export default function MyNav(props) {

    return (
        <>
        <Navbar bg="dark" variant="dark" className="my-nav m-auto">
        <Container >
        <Nav className="p-0 m-auto">
            <Link to="/" className='nav-link'>
                Home
            </Link>
            <Link to="about" className='nav-link'>
                About
            </Link>
            <Link to="browse" className='nav-link'>
                Browse 
            </Link>
            <img src={logo} className="App-logo" alt="logo" />
        </Nav>
        </Container>
        </Navbar>
        </>
    );
}

