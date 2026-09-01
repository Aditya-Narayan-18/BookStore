import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import {Container, Row, Col, Form,Button} from  'react-bootstrap'
import axios from "axios"
function AddMobile() {
    let [modelName,setModelName]=useState('')
    let [brandName,setBrandName]=useState('')
    let [price,setPrice]=useState(0)
    let [RAM,setRAM]=useState(0)
    let [ROM,setROM]=useState(0)
    
    function addMobile(){
        let data = {
            modelName: modelName,
            brandName: brandName,
            price: price,
            RAM: RAM,
            ROM : ROM
        }
        axios({
            url:'http://localhost:3000/add/mobile',
            method:'post',
            data: data
        }).then((res)=>{
            alert(res.data.message)
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
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setModelName(e.target.value)}></Form.Control>
                    </Form.Group>
                  
                    <Form.Group>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setBrandName(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setPrice(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>RAM</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setRAM(e.target.value)}></Form.Control>
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Label>ROM</Form.Label>
                        <Form.Control type="number" onChange={(e)=> setROM(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <br />
                    <Button variant="success" onClick={addMobile}>Add Mobile</Button>
                </Form>
                </Col>
                
            </Row>
        </Container>
        
        </>
    )
}
export default AddMobile