import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Col,
    Container,
    Row,
    Card,
    Button
}from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';


export default function Sites(){
    
    const [sites, setSites] = useState([]);


    useEffect(() =>{
        axios
        .get('http://api.roberthompson.co.uk/sites')
        .then((res) => {
            setSites(res.data)
        })
        .catch((error) => console.log(error))
    },[])

    return(
        <>
        
            <Container>
                <Row>
                    {
                        sites.map(site =>(
                            
                            <Col xs={'4'}>
                                <Card fluid style={{ width: '18rem'}} >
                                    <Card.Img variant="top" src={site.image}/>
                                    <Card.Body>
                                        <Card.Title>{site.name}</Card.Title>                                                       
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                          
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}