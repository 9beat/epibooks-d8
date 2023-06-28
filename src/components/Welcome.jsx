import { Container, Col, Row } from 'react-bootstrap';
import './Welcome.css'
import { Link } from 'react-router-dom';


export default function Jumbotron() {
    return (
    <Container fluid className='hero-container'>
    <Row>
        <Col className="hero-col bg-image" >
            <h1 className="m-5 epic-heading">EpiBooks</h1>
            <h4 className='sub-taste'>
                <Link to="browse" className='text-decoration-none d-inline browse-taste m-auto'>Browse </Link>
                books for every taste
            </h4>
        </Col>
    </Row>
    </Container>
    )
}
