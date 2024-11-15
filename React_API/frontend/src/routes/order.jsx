import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
    Card,
    Container, 
    Row,
    Col,
    Image
}from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PageNavbar from '../components/navbar';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Order(){
    const [order, setOrder] = useState({});
    const [isLoaded, setisLoaded] = useState(false);
    let {orderid} = useParams();

     useEffect(() => {
        var user = Cookies.get('token');
        
        axios
        .get('http://127.0.0.1:3000/orders/'+orderid)
        .then((res) => {
            setOrder(res.data)
            setisLoaded(true)
            
        }).catch((error) => console.log(error))

        
    },[])

    if(isLoaded)
    {
        return(
            <>
            <PageNavbar/>
            <Container fluid>
                <Row>
                    <Col xs='2'></Col>
                    <Col xs='8'>
                    <Card fluid style={{width: '100%'}} >
                                <Card.Body>
                                    <Card.Title>Orders at {order.site}</Card.Title> 
                            </Card.Body>
                            
                                {
                                    order.items.map(item => {
                                        <Card.Img variant="top" src={item.image}/>
                                        
                                    })
                                }                         
                        </Card> 
                    </Col>
                    <Col xs='2'></Col>
                </Row>
            </Container>
            </>
        )
    }

}