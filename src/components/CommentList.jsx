import React, { useState, useEffect } from "react"
import CommentListItem from "./CommentListItem"
import { ListGroup } from "react-bootstrap"
import Loading from "./Loading"
import Error from "./Error"

const CommentList = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    // if (prevProps.asin !== this.props.asin) {
    //   this.setState({
    //     isLoading: true,
    //   })
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxY2E5MDIzOTAwMTVkOTY1YzciLCJpYXQiOjE2NTAyMjgxOTEsImV4cCI6MTY1MTQzNzc5MX0.7kfsRfWSfVlffKfi616rtQhRdS8oUqq13eW68vuYKRU",
          },
        }
      )
      if (response.ok) {
        const commentsGotten = await response.json()
        setComments(commentsGotten)
        setIsLoading(false)
        setIsError(false)
        // this.setState({
        //   comments: commentsGotten,
        //   isLoading: false,
        //   isError: false,
        // })
      } else {
        setIsLoading(false)
        setIsError(true)
        // this.setState({ isLoading: false, isError: true })
        console.log("an error occurred")
      }
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      // this.setState({ isLoading: false, isError: true })
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])
  return (
    <>
      <ListGroup>
        {isLoading && <Loading />}
        {isError && <Error />}
        {comments &&
          comments.map((comment) => (
            <ListGroup.Item>
              <CommentListItem key={comment._id} comment={comment} />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  )
}
export default CommentList
