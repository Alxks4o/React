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
import { useNavigate } from 'react-router-dom';


export default function Sites(){
    
    const navigate = useNavigate();
    const [sites, setSites] = useState([]);
    const selectSite = (site) =>{
        Cookies.set('site',site)
        navigate('/')
    }
        useEffect(() =>{
        axios
        .get('http://192.168.168.122:3000/sites/')
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
                                <Card fluid style={{width: '100%', marginTop: '18px'}} >
                                    <Card.Img variant="top" src={site.image}/>
                                    <Card.Body>
                                        <Card.Title>{site.name}</Card.Title>                                                       
                                    <Button onClick={() => selectSite(site._id)} variant="primary">lick me!</Button>
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