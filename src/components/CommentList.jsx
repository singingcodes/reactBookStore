import React, { Component } from "react"
import CommentListItem from "./CommentListItem"

class CommentList extends Component {
  state = {
    comments: [],
  }

  componentDidMount = async () => {
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
        })
      } else {
        console.log("an error occurred")
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <>
        {this.state.comments &&
          this.state.comments.map((comment) => (
            <CommentListItem key={comment._id} comment={comment} />
          ))}
      </>
    )
  }
}
export default CommentList
