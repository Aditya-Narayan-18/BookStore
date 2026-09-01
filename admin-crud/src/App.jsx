import {BrowserRouter,Route,Routes} from "react-router-dom";
import AddBook from './pages/books/AddBook'
import Booklist from "./pages/books/Booklist";
import Login from './Login'
import Sidebarmenu from './Sidebarmenu.jsx'
import BookPageForEdit from './pages/books/BookPageForEdit'
function App() {
    return(
        <BrowserRouter>
           <Sidebarmenu>
                <Routes>
                    <Route path='/' element = {<Login></Login>}></Route>
                    <Route path='/add/book' element ={<AddBook></AddBook>}></Route>
                    <Route path='/books' element ={<Booklist></Booklist>}></Route>
                    <Route path='/edit/book/:id' element ={<BookPageForEdit></BookPageForEdit>}></Route>
                </Routes>
           </Sidebarmenu>
        </BrowserRouter>
    )
    
}
export default App