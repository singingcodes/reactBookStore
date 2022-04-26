import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-md-8">
            <Row>
              <Col md={4} className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Search Books..."
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              {this.props.booksArray
                .filter((bookList) =>
                  bookList.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book) => (
                  <Col xs={3} className="mb-2" key={book.asin}>
                    <SingleBook
                      book={book}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={(asin) =>
                        this.setState({
                          selectedBook: asin,
                        })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col className="col-md-4 mt-5">
            <h5>Book Review</h5>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default BookList
