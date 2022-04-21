import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyNav from "./components/MyNav"
import MyBadge from "./components/MyBadge"

import BookList from "./components/BookList"
import books from "./data/romance.json"

function App() {
  return (
    <div>
      <MyNav />
      <WarningSign alertContent="Be Warned" />
      <MyBadge badgeContent="Some Info" color="red" />

      <BookList booksArray={books} />
    </div>
  )
}

export default App
