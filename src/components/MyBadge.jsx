import { Container, Row, Col, Badge } from "react-bootstrap"

const MyBadge = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Badge variant="info" style={{ color: props.color }}>
            {props.badgeContent}
          </Badge>
        </Col>
      </Row>
    </Container>
  )
}
export default MyBadge
