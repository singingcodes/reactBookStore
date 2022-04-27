import AddComments from "./AddComments"
import CommentList from "./CommentList"

const CommentArea = (props) => {
  return (
    <div>
      <CommentList asin={props.asin} />
      <AddComments asin={props.asin} />
    </div>
  )
}
export default CommentArea
