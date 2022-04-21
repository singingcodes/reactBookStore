import { Card, Col } from "react-bootstrap"

const SingleBook = ({ book }) => {
  const { img, title } = book

  return (
    <>
      {book && (
        <Col md={3}>
          <h5>Single Book</h5>
          <Card>
            {<Card.Img variant="top" src={img} />}
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  )
}

export default SingleBook
