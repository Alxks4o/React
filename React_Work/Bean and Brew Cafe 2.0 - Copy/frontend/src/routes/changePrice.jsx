import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {
    Button,
    Card,
    Container,
    Form,
    Row,
    Tab,
    Table,
    Col
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import PageNavbar from "../components/navbar";

export default function Ordering(){
    const [isLoaded, setisLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event,product) => {
        event.preventDefault();
        axios
        .put('http://localhost:3000/products/'+product+'/price/',{
            price:event.target[0].value
        })
        .then((res) => {
            setProducts(res.data)
            setisLoaded(true)
        })
    }

    useEffect(() =>{
        axios
        .get('http://127.0.0.1:3000/products')
        .then((res) => {
            setProducts(res.data);
            setisLoaded(true)
        })
        .catch((error) => console.log(error))
    },[]);

    if(isLoaded)
    {
        return(
            <>    
                <PageNavbar/>    
                <Container>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th style={{width:'10%'}}>Price</th>                                    
                                <th style={{width:'40%'}}>Change Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr key={product._id}>
                                        <td><img src={product.image} style={{width:"100px"}}/></td>
                                        <td>{product.name}</td>
                                        <td>£{(product.price.toFixed(2))}</td>
                                        <td>
                                            <Form onSubmit={(event)=> handleChange(event, product._id)}>
                                                <Row>
                                                    <Col>
                                                        <Form.Control type="number" step="0.01" placeholder="Enter price..." />
                                                    </Col>
                                                    <Col>
                                                        <Button variant="danger" type="submit" >Change Price</Button>
                                                    </Col>
                                                </Row>
                                            </Form>                                               
                                            
                                        </td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                        </Table>
                    
                    </Container>                 
            </>
        )
    }
}