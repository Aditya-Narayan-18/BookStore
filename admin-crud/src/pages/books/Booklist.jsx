import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { FaEdit, FaTrash } from "react-icons/fa";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import {Container,Row,Col,Table,Button,Form,Pagination,} from "react-bootstrap";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
function Booklist() {
  let [books, setBooks] = useState([]);
  let [isDelete, setIsDelete] = useState(false);
  let [searchBook, setSearchBook] = useState("");
  let [nop, setNop] = useState(1);
  let navigate = useNavigate();
  let [bookPerPage, setBookPerPage] = useState(10);
  let [pageNo, setPageNumber] = useState(1);
  // let items=[]
  // for(let i=1;i<=nop;i++){
  //     items.push(<Pagination.Item key={i} onClick={()=>setPageNumber(i)}>
  //         {i}
  //     </Pagination.Item>)
  // }
  let items = [];
  items.push(<Pagination.First key="first" onClick={() => setPageNumber(1)} />);
  items.push(
    <Pagination.Prev
      key="prev"
      disabled={pageNo === 1}
      onClick={() => setPageNumber(pageNo - 1)}
    />,
  );
  for (let i = Math.max(1, pageNo - 2); i <= Math.min(nop, pageNo + 2); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === pageNo}
        onClick={() => setPageNumber(i)}
      >
        {i}
      </Pagination.Item>,
    );
  }
  if (pageNo + 2 < nop) {
    items.push(<Pagination.Ellipsis key="ellipsis" disabled />);
    items.push(
      <Pagination.Item key={nop} onClick={() => setPageNumber(nop)}>
        {nop}
      </Pagination.Item>,
    );
  }
  items.push(
    <Pagination.Next
      key="next"
      disabled={pageNo === nop}
      onClick={() => setPageNumber(pageNo + 1)}
    />,
  );
  items.push(<Pagination.Last key="last" onClick={() => setPageNumber(nop)} />);
  function goToAddBook() {
    navigate("/add/book");
  }
  function handleDelete(id) {
    axios({
      //url:'http://localhost:3000/delete/book/'+id,
      url: apiUrl + "/delete/book/" + id,
      method: "delete",
    })
      .then((res) => {
        alert("data has been deleted successfuly...");
        setIsDelete(true);
      })
      .catch((err) => {
        alert(err);
      });
  }
  function handleUpdate(id) {
    navigate("/edit/book/" + id);
  }
  useEffect(() => {
    axios({
      //url: 'http://localhost:3000/books',
      url: apiUrl + "/books",
      method: "get",
      params: {
        searchBook: searchBook,
        pageNo: pageNo,
        bookPerPage: bookPerPage,
      },
    })
      .then((res) => {
        setBooks(res.data.data);
        setNop(Math.ceil(res.data.totalBooks / 10));
      })
      .catch((err) => {
        alert(err);
      });
  }, [isDelete, searchBook, pageNo, bookPerPage]);
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter book title to search"
                onChange={(e) => setSearchBook(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          <Button
            className="mt-5"
            variant="success"
            style={{ float: "right" }}
            onClick={goToAddBook}
          >
            Add Book
          </Button>
          <h3 className="text-center text-danger mt-5">Book list</h3>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Book Image</th>
                <th>Book Title</th>
                <th>Author Name</th>
                <th>Price</th>
                <th>Isbn No.</th>
                <th>No. Pages </th>
                <th>publication</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, key) => (
                <tr key={book._id}>
                  <td>
                    <img src={book.bookImage} alt={book.bookTitle} style={{ width: '30px', height: '30px' }} />
                  </td>
                  <td>{book.bookTitle}</td>
                  <td>{book.authorName}</td>
                  <td>{book.price}</td>
                  <td>{book.isbnno}</td>
                  <td>{book.nop}</td>
                  <td>{book.publication}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(book._id)}
                    >
                      <Trash3 />
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="ms-2"
                      size="sm"
                      onClick={() => handleUpdate(book._id)}
                    >
                      <PencilSquare />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination size="md" className="justify-content-center">
            {items}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}
export default Booklist;
