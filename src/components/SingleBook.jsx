import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          boxShadow: this.state.selected ? "0px 5px 15px 5px #000000" : "none",
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
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
