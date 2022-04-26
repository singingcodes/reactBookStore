import React, { Component } from "react"
import CommentListItem from "./CommentListItem"
import { ListGroup } from "react-bootstrap"
import Loading from "./Loading"
import Error from "./Error"

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      })
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
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
            isLoading: false,
            isError: false,
          })
        } else {
          this.setState({ isLoading: false, isError: true })
          console.log("an error occurred")
        }
      } catch (error) {
        this.setState({ isLoading: false, isError: true })
        console.log(error)
      }
    }
  }
  render() {
    return (
      <>
        <ListGroup>
          {this.state.isLoading && <Loading />}
          {this.state.isError && <Error />}
          {this.state.comments &&
            this.state.comments.map((comment) => (
              <ListGroup.Item>
                <CommentListItem key={comment._id} comment={comment} />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </>
    )
  }
}
export default CommentList
