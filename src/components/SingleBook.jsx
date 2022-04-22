import { Component } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            boxShadow: this.state.selected
              ? "0px 5px 15px 5px #000000"
              : "none",
          }}
        >
          {<Card.Img variant="top" src={this.props.book.img} height="300px" />}
          <Card.Body>
            <Card.Title
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {this.props.book.title}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Container>
          <Row>
            <Col>
              {this.state.selected && (
                <CommentArea asin={this.props.book.asin} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default SingleBook
