// Create a BookList component.
//  This component receives by props a list of books and displays them using the SingleBook component.

import { Container, Row, InputGroup, FormControl, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = ({ booksArray }) => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <InputGroup className="mb-3">
              <FormControl placeholder="searchBooks..." />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {booksArray.slice(0, 4).map((book) => (
        <Container>
          <SingleBook key={book.asin} book={book} />
        </Container>
      ))}
    </>
  )
}
export default BookList
