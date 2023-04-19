import { Container, Row,Col } from "react-bootstrap";
import resumeImg from "../assets/ResumeKe.png";
import 'animate.css';

export const Resume = () => {




  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="justify-content-center align-items-start">
        <Col xs={12} md={6} xl={7}>
            <div className="title">
              <h1>Resume</h1>
            </div>
         </Col>




        <Col xs={12} md={6} xl={7}>
          
            <div className="resume-img">
              <img src={resumeImg} alt="Resume" />
            </div>
            </Col>

        </Row>
      </Container >
    </section >
  )
}