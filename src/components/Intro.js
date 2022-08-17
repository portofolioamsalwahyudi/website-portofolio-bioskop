import { Container, Row, Col, Button } from 'react-bootstrap';

const  Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">NONTON DISINI</div>
                <div className="title">GRATIS 100% NGAB</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark">Lihat semua list</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro