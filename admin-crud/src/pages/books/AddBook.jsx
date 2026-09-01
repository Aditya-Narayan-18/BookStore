import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import {Container, Row, Col, Form,Button} from  'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL
import axios from "axios"
function AddBook() {
    let navigate = useNavigate()
    let [bookTitle,setBookTitle]=useState('')
    let [authorName,setAuthorName]=useState('')
    let [price,setPrice]=useState(0)
    let [isbnno,setIsbnno]=useState(0)
    let [nop,setNop]=useState(0)
    let [publication,setPublication]=useState('')
    let [file, setFile]=useState()
    function addBook(){
        // let data = {
        //     bookTitle: bookTitle,
        //     authorName: authorName,
        //     price: price,
        //     isbnno: isbnno,
        //     nop : nop,
        //     publication: publication,
        //     file: file
        // }
        let fromData = new FormData()
        fromData.append('bookTitle', bookTitle)
        fromData.append('authorName', authorName)
        fromData.append('price', price)
        fromData.append('isbnno', isbnno)
        fromData.append('nop', nop)
        fromData.append('publication', publication)
        fromData.append('file', file)
        axios({
            url: apiUrl+'/add/book',
            method:'post',
            data: fromData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res)=>{
            alert(res.data.message)
            navigate('/books')
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        <>
        <Container className="align-items-center justify-content-center min-vh-100">
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded shadow bg-white mt-5'>
                <h3 className="text-center text-danger">Add New Book </h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setBookTitle(e.target.value)}></Form.Control>
                    </Form.Group>
                  
                    <Form.Group>
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setAuthorName(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setPrice(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>ISBNNO</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setIsbnno(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                   
                    <Form.Group>
                        <Form.Label>No. of pages</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setNop(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Publication</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setPublication(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select the book image</Form.Label>
                        <Form.Control type="file" onChange={(e)=> setFile(e.target.files[0])}></Form.Control>
                    </Form.Group>
                    
                    <br />
                    <Button variant="success" onClick={addBook}>Add Book</Button>
                </Form>
                </Col>
                
            </Row>
        </Container>
        
        </>
    )
}
export default AddBook