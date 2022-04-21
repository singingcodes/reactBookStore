import { Container, Row, Col, Badge } from "react-bootstrap"

const MyBadge = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="mb-3">
          <Badge variant={props.color}>{props.badgeContent}</Badge>
        </Col>
      </Row>
    </Container>
  )
}
export default MyBadge
