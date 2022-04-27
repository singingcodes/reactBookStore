import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"
import { useState } from "react"
import CommentArea from "./CommentArea"
const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null,
  // }
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <Container>
      <Row>
        <Col className="col-md-8">
          <Row>
            <Col md={4} className="my-3">
              <Form.Control
                type="text"
                placeholder="Search Books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            {props.booksArray
              .filter((bookList) =>
                bookList.title.toLowerCase().includes(searchQuery)
              )
              .map((book) => (
                <Col xs={3} className="mb-2" key={book.asin}>
                  <SingleBook
                    book={book}
                    selectedBook={selectedBook}
                    changeSelectedBook={
                      (asin) => setSelectedBook(asin)
                      // this.setState({
                      //   selectedBook: asin,
                      // })
                    }
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col className="col-md-4 mt-5">
          <h5>Book Review</h5>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  )
}
export default BookList
