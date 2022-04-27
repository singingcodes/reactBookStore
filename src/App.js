import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import books from "./data/romance.json"
// import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import MyFooter from "./components/MyFooter"

const App = () => {
  return (
    <div>
      <MyNav />
      {/* <WarningSign alertContent="Warning" />
        <MyBadge badgeContent="Info!!!" color="success" /> */}
      {/* <SingleBook book={books[0]} /> */}

      <BookList booksArray={books} />
      <MyFooter />
    </div>
  )
}
export default App
