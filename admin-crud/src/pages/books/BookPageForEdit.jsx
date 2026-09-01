import { useParams,useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import {useState} from 'react'
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL
import {Container,Row,Col,Form,Button} from "react-bootstrap"
function BookPageForEdit(){
    let params = useParams();
    let navigate = useNavigate()
    let id = params.id;
    let [book,setBook]=useState({
        bookTitle:'',
        authorName:'',
        price:0,
        isbnno:0,
        nop:0,
        publication:''
    })
    useEffect(()=>{
        axios({
            //url:'http://localhost:3000/book/for/edit/'+id,
            url: apiUrl + '/book/for/edit/'+id,
            method:'get'
            
        }).then((res)=>{
            setBook(res.data.data)
        }).catch((err)=>{
            
        })
    },[])

    function manageUpdate(e) {
        let name = e.target.name 
        let value = e.target.value
        setBook((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    function editBook() {
        axios({
        // url:'http://localhost:3000/edit/book/'+id,
        url: apiUrl + '/edit/book/'+id,
        method:'put',
        data:book
        }).then((res)=>{
            alert("data has been updated")
            navigate('/books')
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        <Container className="align-items-center justify-content-center min-vh-100">
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded shadow bg-white mt-5'>
                <h3 className="text-center text-danger">Edit the book</h3>
                    <Form>
                    <Form.Group>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name="bookTitle" value={book.bookTitle} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" name="authorName" value={book.authorName} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={book.price} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Isbn No</Form.Label>
                        <Form.Control type="text" name="isbnno" value={book.isbnno} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nop</Form.Label>
                        <Form.Control type="text" name="nop" value={book.nop} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Publication</Form.Label>
                        <Form.Control type="text" name="publication" value={book.publication} onChange={manageUpdate}></Form.Control>
                    </Form.Group>
                    <Button className='mt-3' variant="danger" onClick={editBook} size="sm" >Edit Page</Button>
             
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default BookPageForEdit