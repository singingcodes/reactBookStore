import React, { Component } from "react"

class CommentListItem extends Component {
  render() {
    return (
      <ul>
        <li>
          Comment:{this.props.comment.comment} Rate:{this.props.comment.rate}
        </li>
      </ul>
    )
  }
}
export default CommentListItem
