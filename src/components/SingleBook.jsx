import { Card } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <>
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          boxShadow:
            props.selectedBook === props.book.asin
              ? "1px -1px 21px -1px rgba(0,0,0,0.75)"
              : "none",
        }}
      >
        {<Card.Img variant="top" src={props.book.img} height="300px" />}
        <Card.Body>
          <Card.Title
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.book.title}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
