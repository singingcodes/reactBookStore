import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
          style={{
            boxShadow:
              this.props.selectedBook === this.props.book.asin
                ? "1px -1px 21px -1px rgba(0,0,0,0.75)"
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
      </>
    )
  }
}

export default SingleBook
