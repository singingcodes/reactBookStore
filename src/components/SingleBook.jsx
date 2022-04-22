import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentList from "./CommentList"

class SingleBook extends Component {
  state = {
    selected: false,
    comments: [],
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
            <Card.Text>
              {this.state.selected && (
                <CommentList comments={this.state.comments} />
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.book.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NTAyMjgxOTEsImV4cCI6MTY1MTQzNzc5MX0.7kfsRfWSfVlffKfi616rtQhRdS8oUqq13eW68vuYKRU",
          },
        }
      )
      if (response.ok) {
        const commentsGotten = await response.json()
        this.setState({
          comments: commentsGotten,
        })
      } else {
        console.log("an error occurred")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default SingleBook
