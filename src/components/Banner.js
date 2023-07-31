
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Thinking.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
  

  
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <span className="tagline">Welcome to my Website</span>
                <h1>{`Hi! I'm Kevin`} </h1>
                  <p>I'm a Computer Science Student at the University of Texas at Dallas</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
