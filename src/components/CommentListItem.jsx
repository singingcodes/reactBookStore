import { Button } from "react-bootstrap"

const CommentListItem = (props) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NTAyMjgxOTEsImV4cCI6MTY1MTQzNzc5MX0.7kfsRfWSfVlffKfi616rtQhRdS8oUqq13eW68vuYKRU",
          },
        }
      )
      if (response.ok) {
        alert("comment deleted!")
      } else {
        alert("comment NOT deleted!")
      }
    } catch (error) {
      alert("comment NOT deleted!")
    }
  }

  return (
    <>
      Comment:{props.comment.comment}{" "}
      <Button
        variant="outline-danger"
        className="float-right"
        onClick={() => deleteComment(props.comment._id)}
      >
        Delete
      </Button>
    </>
  )
}
export default CommentListItem
