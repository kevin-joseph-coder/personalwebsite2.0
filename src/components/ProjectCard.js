import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </Col>
    )
}
