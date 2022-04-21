import { Alert, Container, Row, Col } from "react-bootstrap"

const WarningSign = ({ alertContent }) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <Alert variant="danger">
            <p>{alertContent}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}
export default WarningSign
