import { Navbar, Container } from "react-bootstrap";
import SearchCity from './SearchCity'
import { Link } from 'react-router-dom';


const MyNavbar = () => {

    return (
        <>
            <Navbar className="bg-body-light">
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand as={Link} to="/" className="d-flex justify-content-between">
                        <h1 className="text-dark">🌥 Il Meteo 🌥</h1>
                    </Navbar.Brand>
                    <SearchCity />
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar