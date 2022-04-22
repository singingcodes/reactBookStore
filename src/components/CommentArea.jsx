import React, { Component } from "react"
import AddComments from "./AddComments"
import CommentList from "./CommentList"

export default class CommentArea extends Component {
  render() {
    return (
      <div>
        <CommentList asin={this.props.asin} />
        <AddComments asin={this.props.asin} />
      </div>
    )
  }
}
