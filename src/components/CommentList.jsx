import React, { Component } from "react"
import CommentListItem from "./CommentListItem"

class CommentList extends Component {
  state = {}
  render() {
    return (
      <ul>
        {this.props.comments &&
          this.props.comments.map((comment) => (
            <CommentListItem key={comment._id} comment={comment} />
          ))}
      </ul>
    )
  }
}
export default CommentList
