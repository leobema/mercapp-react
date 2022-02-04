import React from 'react';
import { Button, Navbar, Container, Form, Nav, FormControl, Offcanvas, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
            <div>
            <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">MercApp</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to="#action1">Home</Link>
                        <Link to="#action2">Perfil</Link>
                        <Link to="#action2">Tareas</Link>
                        <Link to="#action2">Tareas Terminadas</Link>
                        <Link to="#action2">Ingresos</Link>
                        <Link to="#action2">Recargas Realizadas</Link>
                        <Link to="#action2">Retiros Realizados</Link>
                        <Link to="/info">Información</Link>
                        <Link to="#action2">Mi Equipo</Link>
                        <Link to="#action2">Invitación</Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action2">Cerrar Sesión</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

        <Container
        h='40vh'
        bg='gray'
        >
        <Card.Img variant="top" src="https://img.freepik.com/psd-gratis/portada-facebook-muebles-plantilla-banner-web_237398-329.jpg?size=626&ext=jpg" />
        <Row align="center">
            <Col>
                <Button variant="info">info</Button>
            </Col>
            <Col>
                <Button variant="success">Reca</Button>
            </Col>
            <Col>
                <Button variant="outline-success">Reti</Button>
            </Col>
            <Col>
                <Button variant="warning">Invi</Button>
            </Col>
         </Row>
        </Container>

        <Card align="center" style={{ padding: '10px' }}>
        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 01</Card.Title>
                        <Card.Text>
                        Price: 20$ 
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 2$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 02</Card.Title>
                        <Card.Text>
                        Price: 50$
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 3,85$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 03</Card.Title>
                        <Card.Text>
                        Price: 200$ 
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 13,28$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 04</Card.Title>
                        <Card.Text>
                        Price: 800$
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 53,76$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 05</Card.Title>
                        <Card.Text>
                        Price: 2000$
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 99,2$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://diarioinforme.com/wp-content/uploads/2021/10/win11_lock_hero_2.jpg" />
                    <Card.Body>
                        <Card.Title>Pack 06</Card.Title>
                        <Card.Text>
                        Price: 5000$
                        <Card.Subtitle className="mb-2 text-muted">Bonus for day: 250$</Card.Subtitle>
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Card>


        </div>

    
    )
  }


export default Home