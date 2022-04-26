import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import books from "./data/romance.json"
// import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import { Component } from "react"

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        {/* <WarningSign alertContent="Warning" />
        <MyBadge badgeContent="Info!!!" color="success" /> */}
        {/* <SingleBook book={books[0]} /> */}

        <BookList booksArray={books} />
      </div>
    )
  }
}
export default App
