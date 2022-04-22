import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Component } from "react"
class BookList extends Component {
  state = {
    searchQuery: "",
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={3} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search Books..."
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          {this.props.booksArray
            .filter((bookList) =>
              bookList.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((bookList) => (
              <Col md={3} className="mb-2" key={bookList.asin}>
                <SingleBook book={bookList} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
