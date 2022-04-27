import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
const AddComments = (props) => {
  // state = {
  //   bookComment: {
  //     comment: "",
  //     rate: "",
  //   },
  // }

  const [bookComment, setBookComment] = useState({
    comment: "",
    rate: "",
  })

  const submitComment = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          method: "POST",
          body: JSON.stringify({
            ...bookComment,
            elementId: props.asin,
          }),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NTAyMjgxOTEsImV4cCI6MTY1MTQzNzc5MX0.7kfsRfWSfVlffKfi616rtQhRdS8oUqq13eW68vuYKRU",
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        alert("SUCCESS! 🥳")
        // this.setState({
        //   bookComment: {
        //     comment: "",
        //     rate: "",
        //   },
        // })
        setBookComment({
          comment: "",
          rate: "",
        })
      } else {
        alert("ERROR HAPPENED 😔")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h6 className="mt-3 text-center">Add Book Review</h6>
      <Form onSubmit={submitComment}>
        <Form.Group>
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comment"
            value={bookComment.comment}
            onChange={(e) =>
              // this.setState({
              //   bookComment: {
              //     ...bookComment,
              //     comment: e.target.value,
              //   },
              // })
              setBookComment({
                ...bookComment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rate"
            value={bookComment.rate}
            onChange={(e) =>
              // this.setState({
              //   bookComment: {
              //     ...bookComment,
              //     rate: e.target.value,
              //   },
              // })
              setBookComment({
                ...bookComment,
                rate: e.target.value,
              })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Comment
        </Button>
      </Form>
    </>
  )
}
export default AddComments
