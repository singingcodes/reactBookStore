import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyNav from "./components/MyNav"
import MyBadge from "./components/MyBadge"
import books from "./data/romance.json"
// import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"

function App() {
  return (
    <div>
      <MyNav />
      <WarningSign alertContent="Warning" />
      <MyBadge badgeContent="Info!!!" color="success" />
      {/* <SingleBook book={books[0]} /> */}
      <BookList booksArray={books} />
    </div>
  )
}

export default App
